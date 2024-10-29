export interface SocialMedia {
  platform: string;
  link: string;
}

 
export interface HeaderProfileInfo {
  firstname : string;
  lastname : string;
  othername : string;
  fullname: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  city : string;
  country  : string;
  postalCode : string;
  dateOfBirth? : string;
  socialMedia: SocialMedia[];
}

export interface ProfessionalSummary{
  summary : string;
}

 
export interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  city : string;
  country : string;
  startDate: string;  
  endDate: string; 
}

 
export interface Experience {
  company: string;
  position: string;
  startDate: string; 
  endDate: string; 
  description?: string;
  responsibilities: string[];
}

 
export interface Skill {
  skill: string;
  proficiency: string;
  level: number; 
}

// Define the certifications interface
export interface Certification {
  name: string;
  issuingOrganization: string;
  issueDate: string; 
  summary?: string;
  expirationDate?: string; 
  credentialId?: string;  
}


// Define the project interface
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

// Define the languages interface
export interface Language {
  language: string;
  proficiency: string; 
}

 
export interface AdditionalSection {
  sectionTitle: string;
  details: string;
}


export interface Hobbies{
  hobby : string[];
}  


// Define the main export type for the entire structure
export interface ITemplate {
  id?: number;
  userId?: string;
  templateId: string;
  HeaderProfileInfo: HeaderProfileInfo;
  ProfessionalSummary : ProfessionalSummary;
  Education: Education[];
  Experience: Experience[];
  Skills: Skill[];
  Hobbies: Hobbies[];
  Certifications: Certification[];
  Projects: Project[];
  Languages: Language[];
  AdditionalSections: AdditionalSection[];
  createdAt: string; 
  updatedAt: string;
}
