import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-cv-builder-start",
  templateUrl: "./cv-builder-start.component.html",
  styleUrls: ["./cv-builder-start.component.scss"],
})
export class CvBuilderStartComponent implements OnInit {
  isLoading = false;
  username = "Samuel";
  userProfile = "./assets/images/placeholder.png";


  @Input() PersonalDetails : any;
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

 

  OnInit() {}

  title = "Cleansheet";

  LINKS = [
    { path: "", icon: "format_shapes", title: "Resumes" },
    { path: "/account/ats-analysis", icon: "attach_file", title: "ATS" },
    {
      path: "/account/cv-rewrite",
      icon: "insert_drive_file",
      title: "CV Rewrite",
    },
    { path: "/account/settings", icon: "settings", title: "Settings" },
  ];

  constructor() {}

  ngOnInit(): void {

 
  }

  updateCv(info : any) {
    console.log(info, "DAA::::::::::::");

    this.PersonalDetails = info;

    this.updateInfo.emit(this.PersonalDetails);
  }


 
}
