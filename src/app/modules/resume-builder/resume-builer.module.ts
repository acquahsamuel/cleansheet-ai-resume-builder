import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResumeBuilderComponent } from "./resume-builder.component";
import { SharedModule } from "src/app/shared/modules/shared.module";
import { ResumeBuilderRoutingModule } from "./resume-routing.module";
import { CvHeaderComponent } from "./pages/sections/cv-header/cv-header.component";
import { ExperienceComponent } from "./pages/sections/experience/experience.component";
import { EducationComponent } from "./pages/sections/education/education.component";
import { SkillsComponent } from "./pages/sections/skills/skills.component";
import { SummaryComponent } from "./pages/sections/summary/summary.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BuilderUiComponent } from "./components/builder-ui/builder-ui.component";
import { MaterialModule } from "src/app/shared/modules/material.module";
import { MatChipsModule } from "@angular/material/chips";
import { EditorModule } from "@tinymce/tinymce-angular";
import { HobbiesComponent } from "./pages/sections/hobbies/hobbies.component";
import { ReferencesComponent } from "./pages/sections/references/references.component";
import { InternshipsComponent } from "./pages/sections/internships/internships.component";
import { CoursesComponent } from "./pages/sections/courses/courses.component";
import { PublicationsComponent } from "./pages/sections/publications/publications.component";
import { ProjectsComponent } from "./pages/sections/projects/projects.component";
import { LanguagesComponent } from "./pages/sections/languages/languages.component";
import { ExtraActivitiesComponent } from "./pages/sections/extra-activities/extra-activities.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { AtsAnalysisComponent } from "./pages/ats-analysis/ats-analysis.component";
import { CvRewriteComponent } from "./pages/cv-rewrite/cv-rewrite.component";
import { CvBuilderStartComponent } from './pages/cv-builder-start/cv-builder-start.component';
import { StartedComponent } from './pages/started/started.component';

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
    ExtraActivitiesComponent,
    SettingsComponent,
    AtsAnalysisComponent,
    CvRewriteComponent,
    CvBuilderStartComponent,
    StartedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatChipsModule,

    EditorModule,
    ResumeBuilderRoutingModule,
  ],
})
export class ResumeBuilerModule {}
