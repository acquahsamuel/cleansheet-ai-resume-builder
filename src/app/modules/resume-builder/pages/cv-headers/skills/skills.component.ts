import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent implements OnInit {
  skillsForm: FormGroup;
  editorContent: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      educationRecords: this.fb.array([this.createEducationRecord()])
    });
  }

  // Create a new FormGroup for an education record
  createEducationRecord(): FormGroup {
    return this.fb.group({
      name: ["", Validators.required],
      proficiency: ["", Validators.required],
      skillDescription : ["", Validators.required],
      summary : ['', Validators.required]
    });
  }

  // Create a new FormGroup for a program
  createProgram(): FormGroup {
    return this.fb.group({
      programName: ["", Validators.required],
    });
  }

  // Get the FormArray for education records
  get educationRecords(): FormArray {
    return this.skillsForm.get("educationRecords") as FormArray;
  }

 
  // Add a new education record
  addEducationRecord(): void {
    this.educationRecords.push(this.createEducationRecord());
  }

  // Remove an education record
  removeEducationRecord(index: number): void {
    this.educationRecords.removeAt(index);
  }

  

  // Save form data to local storage
  saveToLocalStorage(): void {
    localStorage.setItem(
      "educationData",
      JSON.stringify(this.skillsForm.value)
    );
  }

  // Load data from local storage
  loadDataFromLocalStorage(): void {
    const savedData = localStorage.getItem("educationData");
    if (savedData) {
      this.skillsForm.patchValue(JSON.parse(savedData));
    }
  }

 
 
}
