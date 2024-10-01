import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IPersonalDetails } from "../../dto/templates.dto";

@Component({
  selector: "app-template-sunshine",
  templateUrl: "./template-sunshine.component.html",
  styleUrls: ["./template-sunshine.component.scss"],
})
export class TemplateSunshineComponent implements OnInit {
  @Input() selectedTemplate!: string;
  @Input() PersonalDetails: IPersonalDetails;
  @Input() Hobbies = [];
  @Input() Summary = [];
  @Input() Experience = [];
  @Input() Education = [];
  @Input() Skills = [];
  @Input() References = [];
  @Input() Internship = [];
  @Input() Courses = [];
  @Input() Publication = [];
  @Input() Project = [];
  @Input() Languages = [];
  @Input() ExtraCurricularActivities = [];
  @Input() ExtraFields = [];

  @Output() updateInfo = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck() {
    console.log("TEMPLETE RENDERING");

    console.log(this.PersonalDetails, "PersonalDetails");
    console.log(this.Summary, "ProfessionalSummary");
  }

  updatePersonalDetails(data) {
    console.log(data, "EMIT DATA");
    this.updateInfo.emit({ type: "PersonalDetails", data: data });
  }
}
