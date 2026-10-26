export type Role = 'admin' | 'hr' | 'member';

export interface User {
  id: number;
  name: string;
  role: Role;
}

export type ApplicationStatus = 'pending' | 'accepted' | 'rejected';

export interface Application {
  id: number;
  applicantName: string;
  email: string;
  committee: string;
  status: ApplicationStatus;
  appliedAt: string; // ISO date
}

export interface EventItem {
  id: number;
  title: string;
  category: string;
  date: string; // ISO date
  capacity: number;
  registered: number;
}
