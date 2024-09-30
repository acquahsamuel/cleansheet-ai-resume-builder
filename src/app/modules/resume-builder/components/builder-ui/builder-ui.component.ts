import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { HobbiesComponent } from "../../pages/cv-headers/hobbies/hobbies.component";
import { ReferencesComponent } from "../../pages/cv-headers/references/references.component";
import { InternshipsComponent } from "../../pages/cv-headers/internships/internships.component";
import { CoursesComponent } from "../../pages/cv-headers/courses/courses.component";
import { PublicationsComponent } from "../../pages/cv-headers/publications/publications.component";
import { ProjectsComponent } from "../../pages/cv-headers/projects/projects.component";
import { LanguagesComponent } from "../../pages/cv-headers/languages/languages.component";
import { ExtraActivitiesComponent } from "../../pages/cv-headers/extra-activities/extra-activities.component";

@Component({
  selector: "app-builder-ui",
  templateUrl: "./builder-ui.component.html",
  styleUrls: ["./builder-ui.component.scss"],
})
export class BuilderUiComponent implements OnInit {
  step = 0;

  @Input() PersonalDetails = [];
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

  @Output() onPersonalInfoUpdateEvt = new EventEmitter<any>();
  @Output() onHobbiesUpdate = new EventEmitter<any>();
  @Output() onSummaryUpdateEvt = new EventEmitter<any>();
  @Output() onExperienceUpdate = new EventEmitter<any>();
  @Output() onEducationUpdate = new EventEmitter<any>();
  @Output() onSkillsUpdate = new EventEmitter<any>();
  @Output() onReferencesUpdate = new EventEmitter<any>();
  @Output() onInternshipUpdate = new EventEmitter<any>();
  @Output() onCoursesUpdate = new EventEmitter<any>();
  @Output() onPublicationUpdate = new EventEmitter<any>();
  @Output() onProjectUpdate = new EventEmitter<any>();
  @Output() onLanguagesUpdate = new EventEmitter<any>();
  @Output() onExtraCurricularActivitiesUpdate = new EventEmitter<any>();


  constructor() {}

  panels = [
    { icon: "account_circle", title: "Personal Details" },
    { icon: "assignment_turned_in", title: "Summary" },
    { icon: "work", title: "Experience" },
    { icon: "school", title: "Education" },
    { icon: "build", title: "Skills" },
  ];

  extraPanels = [
    {
      icon: "directions_run",
      component: HobbiesComponent,
      title: "Hobbies",
      visible: false,
    },
    {
      icon: "book",
      component: ReferencesComponent,
      title: "References",
      visible: false,
    },
    {
      icon: "nature_people",
      component: InternshipsComponent,
      title: "Internship",
      visible: false,
    },
    {
      icon: "note_add",
      component: CoursesComponent,
      title: "Courses",
      visible: false,
    },
    {
      icon: "new_releases",
      component: PublicationsComponent,
      title: "Publication",
      visible: false,
    },
    {
      icon: "widgets",
      component: ProjectsComponent,
      title: "Project",
      visible: false,
    },
    {
      icon: "language",
      component: LanguagesComponent,
      title: "Languages",
      visible: false,
    },
    {
      icon: "wb_incandescent",
      component: ExtraActivitiesComponent,
      title: "Extra Curricular Activities",
      visible: false,
    },
  ];

  extraButtons = [
    "Hobbies",
    "References",
    "Internship",
    "Courses",
    "Publication",
    "Project",
    "Languages",
    "Extra curricular Activities",
  ];

  toggleExtraPanel(index: number): void {
    // Toggle the visibility of the corresponding extra panel
    this.extraPanels[index].visible = !this.extraPanels[index].visible;
  }

  setStep(index: number): void {
    this.step = index;
  }

  prevStep(): void {
    if (this.step > 0) {
      this.step--;
    }
  }

  nextStep(): void {
    if (this.step < this.panels.length - 1) {
      this.step++;
    }
  }

  saveToLocalStorage() {}

  ngOnInit(): void {}

  updateCv() {}

  onPersonalInfoUpdate(updatedInfo: any): void {
    this.PersonalDetails = updatedInfo;
    // this.Summary = updatedInfo;
    this.onPersonalInfoUpdateEvt.emit(updatedInfo);
  }

  onHobbiesUpdateEvt(hobbies: any) {
    this.Hobbies = hobbies;
    this.onHobbiesUpdate.emit(hobbies);
  }

  onExperienceUpdateEvt(experience: any) {
    this.Experience = experience;
    this.onExperienceUpdate.emit(experience);
  }

  
  onSummaryUpdate(updateSummary : any) {
    this.onSummaryUpdateEvt.emit(updateSummary);
  }
}
