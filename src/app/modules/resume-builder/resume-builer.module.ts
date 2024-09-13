import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeBuilderComponent } from './resume-builder.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { ResumeBuilderRoutingModule } from './resume-routing.module';
import { CvHeaderComponent } from './sections/cv-header/cv-header.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { EducationComponent } from './sections/education/education.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { SummaryComponent } from './sections/summary/summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuilderUiComponent } from './components/builder-ui/builder-ui.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { MatChipsModule } from '@angular/material/chips';
import { EditorModule } from "@tinymce/tinymce-angular";
import { HobbiesComponent } from './sections/hobbies/hobbies.component';
import { ReferencesComponent } from './sections/references/references.component';
import { InternshipsComponent } from './sections/internships/internships.component';
import { CoursesComponent } from './sections/courses/courses.component';
import { PublicationsComponent } from './sections/publications/publications.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { LanguagesComponent } from './sections/languages/languages.component';
import { ExtraActivitiesComponent } from './sections/extra-activities/extra-activities.component';


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    CvHeaderComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    SummaryComponent,
    BuilderUiComponent,
    HobbiesComponent,
    ReferencesComponent,
    InternshipsComponent,
    CoursesComponent,
    PublicationsComponent,
    ProjectsComponent,
    LanguagesComponent,
    ExtraActivitiesComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatChipsModule,
    
    EditorModule,
    ResumeBuilderRoutingModule
  ]
})
export class ResumeBuilerModule { }
