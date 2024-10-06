import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  Injector,
  StaticProvider,
} from '@angular/core';
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
  injector: Injector = Injector.create({
    providers: [
      {
        provide: 'CV_DATA',
        useValue: {
          PersonalDetails: [],
          Summary: [],
          Experience: [],
          Education: [],
          References: [],
          Skills: [],
          Hobbies: [],
          Internship: [],
          Courses: [],
          Publication: [],
          Project: [],
          Languages: [],
          ExtraCurricularActivities: [],
          ExtraFields: [],
        } as any,
      },
    ],
  });

  @Input() PersonalDetails = [];
  @Input() Summary = [];
  @Input() Experience = [];
  @Input() Education = [];
  @Input() References = [];
  @Input() Skills = [];
  @Input() Hobbies = [];
  @Input() Internship = [];
  @Input() Courses = [];
  @Input() Publication = [];
  @Input() Project = [];
  @Input() Languages = [];
  @Input() ExtraCurricularActivities = [];
  @Input() ExtraFields = [];

  constructor() {}

  // panels = [
  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'Personal Details',
  //     component: CvHeaderComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '4px',
  //       'margin-bottom': '24px',
  //       border: '0px',
  //     },
  //   },
  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'Professional Summary',
  //     component: SummaryComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '4px',
  //       'margin-bottom': '24px',
  //       border: '1px solid #',
  //     },
  //   },
  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'Experience',
  //     component: ExperienceComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '4px',
  //       'margin-bottom': '24px',
  //       border: '0px',
  //     },
  //   },
  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'Education',
  //     component: EducationComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '4px',
  //       'margin-bottom': '24px',
  //       border: '0px',
  //     },
  //   },

  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'Skills',
  //     component: SkillsComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '4px',
  //       'margin-bottom': '24px',
  //       border: '0px',
  //     },
  //   },
  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'Hobbies',
  //     component: HobbiesComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '4px',
  //       'margin-bottom': '24px',
  //       border: '0px',
  //     },
  //   },
  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'References',
  //     component: ReferencesComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '4px',
  //       'margin-bottom': '24px',
  //       border: '0px',
  //     },
  //   },
  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'Languages',
  //     component: LanguagesComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '4px',
  //       'margin-bottom': '24px',
  //       border: '0px',
  //     },
  //   },
  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'Courses',
  //     component: CoursesComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '1px',
  //       'margin-bottom': '24px',
  //       border: '1px solid dogerblue',
  //     },
  //   },

  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'Publications',
  //     component: PublicationsComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '4px',
  //       'margin-bottom': '24px',
  //       border: '0px',
  //     },
  //   },

  //   {
  //     active: true,
  //     disabled: false,
  //     icon: 'plus-circle',
  //     name: 'Extra Curricular Activities',
  //     component: ExtraActivitiesComponent,
  //     visible: true,
  //     customStyle: {
  //       background: '#',
  //       'border-radius': '1px',
  //       'margin-bottom': '24px',
  //       border: '0px',
  //     },
  //   },
  // ];

 

  saveToLocalStorage() {}

  ngOnInit(): void {}

  updateCv() {}

  onPersonalInfoUpdateEvt(data: any) {
    console.log('PERSONAL INFO UPDATED', data);
    this.PersonalDetails = data;
  }

  onEducationFormUpdate(data: any) {
    console.log('DATA PASSED', data);
    this.Education = data.educationRecords;
  }

  // Panels data (e.g., CV sections)
  panels = [
    { name: 'Personal Information', icon: 'person', title: '' },
    { name: 'Summary', icon: 'description', title: '' },
    { name: 'Experience', icon: 'work', title: '' },
    { name: 'Education', icon: 'school', title: '' },
    { name: 'Skills', icon: 'build', title: '' },
  ];

  // Additional panels data
  extraPanels = [
    {
      title: 'Certifications',
      icon: 'verified',
      componentType: LanguagesComponent,
      visible: false,
      component: ExtraActivitiesComponent,
    },
    {
      title: 'Languages',
      icon: 'language',
      componentType: ExtraActivitiesComponent,
      visible: false,
      component: LanguagesComponent,
    },
  ];

  // Button labels for extra panels
  extraButtons = ['Certifications', 'Languages'];

  // Keeps track of the currently active panel (index)

  // Methods to handle panel expansion and collapsing
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

  // Toggle visibility for extra panels when buttons are clicked
  toggleExtraPanel(index: number): void {
    this.extraPanels[index].visible = !this.extraPanels[index].visible;
  }

  // Event handler methods (example for updating data)
  onPersonalInfoUpdate(updatedData: any) {
    this.PersonalDetails = updatedData;
  }

  onSummaryUpdate(updatedData: any): void {
    this.Summary = updatedData;
  }

  onExperienceUpdate(updatedData: any): void {
    this.Experience = updatedData;
  }

  onEducationUpdate(updatedData: any): void {
    this.Education = updatedData;
  }

  onSkillsUpdate(updatedData: any): void {
    this.Skills = updatedData;
  }

  onLanguagesUpdate(updatedData: any): void {}
}
