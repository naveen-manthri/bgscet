export interface ContactPerson {
  id: number;
  name: string;
  designation: string;
  organization: string;
  phone: string;
  email?: string;
}

export interface VisitDetails {
  address: string[];
  contact: string;
}

export interface ContactEnquiryData {
  title: string;
  description: string;
  contacts: ContactPerson[];
  visit: VisitDetails;
  googleFormUrl: string;
  googleMapUrl: string;
}
