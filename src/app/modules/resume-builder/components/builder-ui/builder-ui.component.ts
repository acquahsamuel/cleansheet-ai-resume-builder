import { Component } from "@angular/core";
import { HobbiesComponent } from "../../sections/hobbies/hobbies.component";
import { ReferencesComponent } from "../../sections/references/references.component";
import { InternshipsComponent } from "../../sections/internships/internships.component";
import { CoursesComponent } from "../../sections/courses/courses.component";
import { PublicationsComponent } from "../../sections/publications/publications.component";
import { ProjectsComponent } from "../../sections/projects/projects.component";
import { LanguagesComponent } from "../../sections/languages/languages.component";
import { ExtraActivitiesComponent } from "../../sections/extra-activities/extra-activities.component";

const CVHeader = {
  firstname: "James",
};

@Component({
  selector: "app-builder-ui",
  templateUrl: "./builder-ui.component.html",
  styleUrls: ["./builder-ui.component.scss"],
})
export class BuilderUiComponent {
  CVHeaderInfo = CVHeader;
  step = 0;

  constructor() {}

 
 
  panels = [
    { icon: "account_circle", title: "Personal Details" },
    { icon: "assignment_turned_in", title: "Summary" },
    { icon: "work", title: "Experience" },
    { icon: "school", title: "Education" },
    { icon: "build", title: "Skills" }
  ];


  extraPanels = [
    { icon: 'directions_run', component : HobbiesComponent, title: 'Hobbies', visible: false },
    { icon: 'book', component : ReferencesComponent, title: 'References', visible: false },
    { icon: 'nature_people', component : InternshipsComponent, title: 'Internship', visible: false },
    { icon: 'note_add', component : CoursesComponent, title: 'Courses', visible: false },
    { icon: 'new_releases', component : PublicationsComponent, title: 'Publication', visible: false },
    { icon: 'widgets', component : ProjectsComponent, title: 'Project', visible: false },
    { icon: 'language', component : LanguagesComponent, title: 'Languages', visible: false },
    { icon: 'wb_incandescent', component : ExtraActivitiesComponent, title: 'Extra Curricular Activities', visible: false }
  ];

   
  extraButtons = [
    "Hobbies",
    "References",
    "Internship",
    "Courses",
    "Publication",
    "Project",
    "Languages",
    "Extra curricular Activities"
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

  saveToLocalStorage() {
     
  }
}
