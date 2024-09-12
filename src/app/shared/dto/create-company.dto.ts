export interface ICompany {
  companyName: string;
  companyAddress: string;
  companyContact: string;
  companyLogo: string;
  companyTwitter: string;
  companyLikedin: string;
  companyEmail: string;
  invoiceNotes: string;
  jobs: string;
}

export interface IUpdateCompany {
  companyName?: string;
  companyAddress?: string;
  companyContact?: string;
  companyLogo?: string;
  companyTwitter?: string;
  companyLikedin?: string;
  companyEmail?: string;
  invoiceNotes?: string;
  jobs?: string;
}

export class Company implements ICompany {
  constructor(
    public companyName: string,
    public companyAddress: string,
    public companyContact: string,
    public companyLogo: string,
    public companyTwitter: string,
    public companyLikedin: string,
    public companyEmail: string,
    public invoiceNotes: string,
    public jobs: string
  ) {}
}
