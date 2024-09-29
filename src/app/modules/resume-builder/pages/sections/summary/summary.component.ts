import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})

export class SummaryComponent implements OnInit {
  educationForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.educationForm = this.fb.group({
      educationRecords: this.fb.array([this.createEducationRecord()])
    });
  }

  // Create a new FormGroup for an education record
  createEducationRecord(): FormGroup {
    return this.fb.group({
      name: ["", Validators.required],
      roleDescription: ["", Validators.required]
    });
  }
 

  // Get the FormArray for education records
  get educationRecords(): FormArray {
    return this.educationForm.get("educationRecords") as FormArray;
  }

  // Get the FormArray for programs within an education record
  getPrograms(educationIndex: number): FormArray {
    return this.educationRecords.at(educationIndex).get("programs") as FormArray;
  }

  // Add a new education record
  addEducationRecord(): void {
    this.educationRecords.push(this.createEducationRecord());
  }

  // Remove an education record
  removeEducationRecord(index: number): void {
    this.educationRecords.removeAt(index);
  }

  
  // Remove a program from a specific education record
  removeProgram(educationIndex: number, programIndex: number): void {
    this.getPrograms(educationIndex).removeAt(programIndex);
  }

  // Save form data to local storage
  saveToLocalStorage(): void {
    localStorage.setItem(
      "educationData",
      JSON.stringify(this.educationForm.value)
    );
  }

  // Load data from local storage
  loadDataFromLocalStorage(): void {
    const savedData = localStorage.getItem("educationData");
    if (savedData) {
      this.educationForm.patchValue(JSON.parse(savedData));
    }
  }
}
