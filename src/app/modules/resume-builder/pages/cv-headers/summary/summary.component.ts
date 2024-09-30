import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators } from "@angular/forms";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"],
})
export class SummaryComponent implements OnInit {
  professionalSummaryForm: FormGroup;
  @Input() Summary: any;
  @Output() updateSummaryInfo = new EventEmitter<any>();

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.professionalSummaryForm = this._fb.group({
      summary : ['', Validators.required]
    });
   


    this.professionalSummaryForm.valueChanges.subscribe((value) => {
      console.log("VALUES IN SUMMARY::", value)
      this.updateSummaryInfo.emit(value);
    });

 
  }
 
}
