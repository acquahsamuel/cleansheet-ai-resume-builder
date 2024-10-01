export interface IJob {
  id?: string;
  position?: string;
  locationAllowed?: string;

  jobStatus?: string;
  jobCategory?: string;
  jobTags?: string[];


  minimumSalary?: number;
  maximumSalary?: number;
  slug?: string;

  currency?: string;
  salaryInterval?: string;
  jobDescription: string;
  applicationURL?: string;

  
  applyToEmail?: string;
  postingDate?: string;
}

export interface IUpdateJob {
  id?: string;
  position?: string;
  locationAllowed?: string;
  jobStatus?: string;
  jobCategory?: string;
  jobTags?: string[];
  minimumSalary?: number;
  maximumSalary?: number;
  slug?: string;
  currency?: string;
  salaryInterval: string;
  jobDescription: string;
  applicationURL: string;
  applyToEmail: string;
  postingDate: string;
}

export class CreateJob implements IJob {
  constructor(
    public position: string,
    public locationAllowed: string,
    public jobStatus: string,
    public jobCategory: string,
    public jobTags: string[],
    public minimumSalary: number,
    public maximumSalary: number,
    public slug: string,
    public currency: string,
    public salaryInterval: string,
    public jobDescription: string,
    public applicationURL: string,
    public applyToEmail: string,
    public postingDate: string,
  ) {}
}
