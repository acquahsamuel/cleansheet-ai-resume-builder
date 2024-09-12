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
import { AdditionalSkillsComponent } from './sections/additional-skills/additional-skills.component';
import { FinalizeComponent } from './sections/finalize/finalize.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreviewUiComponent } from './components/preview-ui/preview-ui.component';
import { BuilderUiComponent } from './components/builder-ui/builder-ui.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { MatChipsModule } from '@angular/material/chips';
import { EditorModule } from "@tinymce/tinymce-angular";


@NgModule({
  declarations: [
    ResumeBuilderComponent,
    CvHeaderComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    SummaryComponent,
    AdditionalSkillsComponent,
    FinalizeComponent,
    PreviewUiComponent,
    BuilderUiComponent

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
