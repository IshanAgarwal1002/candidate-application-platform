import { ReactNode } from "react";

export interface JobData {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number | null;
  minJdSalary: number | null,
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

export interface SearchJobsData {
  jdList: JobData[];
  totalCount: number;
}

export interface SearchJobsAPIBodyData {
  limit: number;
  offset: number;
}

export interface DropdownListItem {
  value: string;
  label: ReactNode;
  placeholder?: boolean;
  customCls?: string;
}