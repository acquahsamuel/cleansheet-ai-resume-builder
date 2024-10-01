import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HobbiesComponent } from '../../pages/cv-headers/hobbies/hobbies.component';
import { ReferencesComponent } from '../../pages/cv-headers/references/references.component';
import { InternshipsComponent } from '../../pages/cv-headers/internships/internships.component';
import { CoursesComponent } from '../../pages/cv-headers/courses/courses.component';
import { PublicationsComponent } from '../../pages/cv-headers/publications/publications.component';
import { ProjectsComponent } from '../../pages/cv-headers/projects/projects.component';
import { LanguagesComponent } from '../../pages/cv-headers/languages/languages.component';
import { ExtraActivitiesComponent } from '../../pages/cv-headers/extra-activities/extra-activities.component';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../../pages/cv-headers/skills/skills.component';
import { EducationComponent } from '../../pages/cv-headers/education/education.component';
import { SummaryComponent } from '../../pages/cv-headers/summary/summary.component';
import { CvHeaderComponent } from '../../pages/cv-headers/cv-header/cv-header.component';
import { ExperienceComponent } from '../../pages/cv-headers/experience/experience.component';
import { NgZorroAntdModule } from '../../../../shared/modules/ng-zero-ant.module';
import { TemplateSunshineComponent } from '../../../../shared/resume-templates/template-sunshine/template-sunshine.component';

@Component({
  selector: 'app-builder-ui',
  templateUrl: './builder-ui.component.html',
  styleUrls: ['./builder-ui.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HobbiesComponent,
    ReferencesComponent,
    InternshipsComponent,
    CoursesComponent,
    CvHeaderComponent,
    ExperienceComponent,
    PublicationsComponent,
    ProjectsComponent,
    LanguagesComponent,
    EducationComponent,
    SummaryComponent,
    SkillsComponent,
    ExtraActivitiesComponent,

    TemplateSunshineComponent,
  ],
})
export class BuilderUiComponent implements OnInit {
  step = 0;
  expandIconPosition: 'start' | 'end' = 'start';

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
    {
      active: true,
      disabled: false,
      icon: 'plus-circle',
      name: 'Personal Details',
      component: CvHeaderComponent,
      visible: true,
      customStyle: {
        background: '#FAF9F6',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
      },
    },
    {
      active: true,
      disabled: false,
      icon: 'plus-circle',
      name: 'Education',
      component: EducationComponent,
      visible: true,
      customStyle: {
        background: '#FAF9F6',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
      },
    },
    {
      active: true,
      disabled: false,
      icon: 'plus-circle',
      name: 'Professional Summary',
      component: SummaryComponent,
      visible: true,
      customStyle: {
        background: '#FAF9F6',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
      },
    },
    {
      active: true,
      disabled: false,
      icon: 'plus-circle',
      name: 'Experience',
      component: ExperienceComponent,
      visible: true,
      customStyle: {
        background: '#FAF9F6',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
      },
    },
    {
      active: true,
      disabled: false,
      icon: 'plus-circle',
      name: 'Skills',
      component: SkillsComponent,
      visible: true,
      customStyle: {
        background: '#FAF9F6',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
      },
    },
    {
      active: true,
      disabled: false,
      icon: 'plus-circle',
      name: 'Hobbies',
      component: HobbiesComponent,
      visible: true,
      customStyle: {
        background: '#FAF9F6',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
      },
    },
    {
      active: true,
      disabled: false,
      icon: 'plus-circle',
      name: 'References',
      component: ReferencesComponent,
      visible: true,
      customStyle: {
        background: '#FAF9F6',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
      },
    },
    {
      active: true,
      disabled: false,
      icon: 'plus-circle',
      name: 'Languages',
      component: LanguagesComponent,
      visible: true,
      customStyle: {
        background: '#FAF9F6',
        'border-radius': '4px',
        'margin-bottom': '24px',
        border: '0px',
      },
    },
  ];

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

  onSummaryUpdate(updateSummary: any) {
    this.onSummaryUpdateEvt.emit(updateSummary);
  }
}
