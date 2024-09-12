import { Component, OnInit , Input , Output} from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss']
})
export class CvHeaderComponent implements OnInit {
  headerInfoForm: FormGroup;

  @Input() ICVHeaderInfo : any;


  selectedFileName: string | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  uploadProgress: number | null = null;

  constructor(

    private _fb : FormBuilder
  ) { }

  ngOnInit(): void {

    this.headerInfoForm = this._fb.group({
      firstname  : [],
      surname  : [],
      city  : [],
      country  : [],
      postalCode  : [],
      phoneNumber  : [],
      email  : [],
    })


    this.headerInfoForm.valueChanges.subscribe(v =>{
      console.log(v, "VALSUESE:::::::;");


      localStorage.setItem(
        "HEADERINFO",
        JSON.stringify(this.headerInfoForm.value)
      );

    })

  }





  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;

      // Display image preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);

      // Start upload
      // this.uploadService.uploadFile(file).subscribe({
      //   next: (event: HttpEvent<any>) => {
      //     switch (event.type) {
      //       case HttpEventType.UploadProgress:
      //         if (event.total) {
      //           this.uploadProgress = Math.round(100 * event.loaded / event.total);
      //         }
      //         break;
      //       case HttpEventType.Response:
              
      //         this.image = event.body.result;
      //         this.uploadProgress = null; 
      //         break;
      //     }
      //   },
      //   error: (error: any) => {
      //     console.error('Upload error', error);
      //     this.uploadProgress = null;  
      //   }
      // });
    }
  }

}
