import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-cv-header",
  templateUrl: "./cv-header.component.html",
  styleUrls: ["./cv-header.component.scss"],
})
export class CvHeaderComponent implements OnInit {
  @Input() ICVHeaderInfo: any;
  headerInfoForm: FormGroup;
  selectedFileName: string | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  fieldTypes = [
    "Passport ID",
    "Nationality",
    "Marital Status",
    "Military Service",
    "Driving License",
    "Gender or Pronoun",
    "Website",
    "LinkedIn",
    "X",
    "Medium",
    "GitHub",
    "ORCID",
    "Skype",
    "Discord",
    "Dribbble",
    "Behance",
    "Stack Overflow",
    "GitLab",
    "Quora",
    "Facebook",
    "Instagram",
    "WeChat",
    "Hugging Face",
    "Kaggle",
    "YouTube",
    "TikTok",
    "Signal",
    "Telegram",
    "WhatsApp",
    "PayPal",
    "Product Hunt",
  ];

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.headerInfoForm = this._fb.group({
      firstname: [''],
      surname: [''],
      city: [''],
      country: [''],
      postalCode: [''],
      phoneNumber: [''],
      dateOfBirth: [''],
      email: [''],
      fields: this._fb.array([]),
    });

    this.headerInfoForm.valueChanges.subscribe(v => {
      console.log(v, "VALUES:::::::;");
    });
  }

  get fields() {
    return this.headerInfoForm.get('fields') as FormArray;
  }

  addField(fieldLabel: string) {
    const control = this._fb.group({
      label: [fieldLabel],
      value: [""],
    });
    this.fields.push(control);
  }

  removeField(index: number) {
    this.fields.removeAt(index);
  }

  submitForm() {
    console.log(this.headerInfoForm.value);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
