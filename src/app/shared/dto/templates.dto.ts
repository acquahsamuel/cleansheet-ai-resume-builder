// cv.model.ts
export interface IPersonalDetails {
  firstname: string;
  surname: string;
  city: string;
  country: string;
  postalCode: string;
  phoneNumber: string;
  dateOfBirth: string;  
  email: string;
  fields: any[];
}

export interface IExperience {
  title: string;
  company: string;
  years: string;
}

export interface IPublication {
  title: string;
  url: string;
  datePublished: string;
}

export interface ITemplate {
  personalDetails: IPersonalDetails;
  experience: IExperience[];
  publications: IPublication[];
  PersonalDetails: IPersonalDetails;
  Hobbies: string;
  Summary: string;
  Experience: string;
  Education: string;
  Skills: string;
  References: string;
  Internship: string;
  Courses: string;
  Publication: string;
  Project: string;
  Languages: string;
  ExtraCurricularActivities: string;
  ExtraFields: string;
}

// education-record.interface.ts
export interface IProgram {
  programName: string;
}

export interface EducationRecord {
  name: string;
  degree: string;
  roleDescription: string;
  startYear: number; // or string if you prefer
  endYear: number; // or string if you prefer
  programs: IProgram[]; // optional if you have programs
}



 