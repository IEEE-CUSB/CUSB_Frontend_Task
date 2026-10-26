// Fake database. Treat src/api/mockData.ts and src/api/fakeBaseQuery.ts
// as "the backend": do not edit these two files.
import type { Application, EventItem } from '../types';

export const COMMITTEES = ['Web', 'Mobile', 'AI', 'Embedded', 'Media'];

export const db: { events: EventItem[]; applications: Application[] } = {
  events: [
    { id: 1, title: 'Intro to Git & GitHub', category: 'Workshop', date: '2026-11-03', capacity: 60, registered: 52 },
    { id: 2, title: 'Embedded Systems Day', category: 'Conference', date: '2026-11-10', capacity: 120, registered: 87 },
    { id: 3, title: 'React from Zero', category: 'Workshop', date: '2026-11-17', capacity: 40, registered: 40 },
    { id: 4, title: 'Career Talk: Life After Graduation', category: 'Talk', date: '2026-11-24', capacity: 200, registered: 141 },
    { id: 5, title: 'Hack the Campus', category: 'Competition', date: '2026-12-05', capacity: 80, registered: 33 },
    { id: 6, title: 'Machine Learning Study Jam', category: 'Workshop', date: '2026-12-12', capacity: 50, registered: 18 },
  ],
  applications: [
    { id: 1, applicantName: 'Nour Hassan', email: 'nour.h@example.com', committee: 'Web', status: 'pending', appliedAt: '2026-10-01' },
    { id: 2, applicantName: 'Omar Khaled', email: 'omar.k@example.com', committee: 'Web', status: 'accepted', appliedAt: '2026-10-01' },
    { id: 3, applicantName: 'Salma Adel', email: 'salma.a@example.com', committee: 'Mobile', status: 'pending', appliedAt: '2026-10-02' },
    { id: 4, applicantName: 'Youssef Ibrahim', email: 'youssef.i@example.com', committee: 'AI', status: 'rejected', appliedAt: '2026-10-02' },
    { id: 5, applicantName: 'Mariam Samir', email: 'mariam.s@example.com', committee: 'AI', status: 'pending', appliedAt: '2026-10-03' },
    { id: 6, applicantName: 'Ahmed Tarek', email: 'ahmed.t@example.com', committee: 'Embedded', status: 'accepted', appliedAt: '2026-10-03' },
    { id: 7, applicantName: 'Farida Mostafa', email: 'farida.m@example.com', committee: 'Media', status: 'pending', appliedAt: '2026-10-04' },
    { id: 8, applicantName: 'Karim Magdy', email: 'karim.m@example.com', committee: 'Web', status: 'pending', appliedAt: '2026-10-04' },
    { id: 9, applicantName: 'Hagar Ali', email: 'hagar.a@example.com', committee: 'Mobile', status: 'accepted', appliedAt: '2026-10-05' },
    { id: 10, applicantName: 'Mostafa Nabil', email: 'mostafa.n@example.com', committee: 'Embedded', status: 'pending', appliedAt: '2026-10-05' },
    { id: 11, applicantName: 'Rana Sherif', email: 'rana.s@example.com', committee: 'Media', status: 'rejected', appliedAt: '2026-10-06' },
    { id: 12, applicantName: 'Ali Mahmoud', email: 'ali.m@example.com', committee: 'AI', status: 'pending', appliedAt: '2026-10-06' },
    { id: 13, applicantName: 'Dina Waleed', email: 'dina.w@example.com', committee: 'Web', status: 'rejected', appliedAt: '2026-10-07' },
    { id: 14, applicantName: 'Tamer Fouad', email: 'tamer.f@example.com', committee: 'Mobile', status: 'pending', appliedAt: '2026-10-07' },
    { id: 15, applicantName: 'Jana Essam', email: 'jana.e@example.com', committee: 'AI', status: 'accepted', appliedAt: '2026-10-08' },
    { id: 16, applicantName: 'Bassem Gaber', email: 'bassem.g@example.com', committee: 'Web', status: 'pending', appliedAt: '2026-10-08' },
  ],
};
