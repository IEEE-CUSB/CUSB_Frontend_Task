import { createApi } from '@reduxjs/toolkit/query/react';
import { fakeBaseQuery } from './fakeBaseQuery';
import type { Application, ApplicationStatus, EventItem, Role, User } from '../types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fakeBaseQuery,
  tagTypes: ['Event', 'Application'],
  endpoints: (builder) => ({
    // ---- auth
    login: builder.mutation<User, Role>({
      query: (role) => ({ method: 'POST', url: '/login', body: { role } }),
    }),
    logout: builder.mutation<{ ok: boolean }, void>({
      query: () => ({ method: 'POST', url: '/logout' }),
    }),

    // ---- events
    getEvents: builder.query<EventItem[], void>({
      query: () => ({ method: 'GET', url: '/events' }),
      providesTags: ['Event'],
    }),
    getEvent: builder.query<EventItem, number>({
      query: (id) => ({ method: 'GET', url: `/events/${id}` }),
      providesTags: (_result, _error, id) => [{ type: 'Event', id }],
    }),
    deleteEvent: builder.mutation<{ id: number }, number>({
      query: (id) => ({ method: 'DELETE', url: `/events/${id}` }),
      invalidatesTags: ['Event'],
    }),

    // ---- applications
    getApplications: builder.query<Application[], void>({
      query: () => ({ method: 'GET', url: '/applications' }),
      providesTags: ['Application'],
    }),
    updateApplicationStatus: builder.mutation<Application, { id: number; status: ApplicationStatus }>({
      query: ({ id, status }) => ({ method: 'PATCH', url: `/applications/${id}`, body: { status } }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetEventsQuery,
  useGetEventQuery,
  useDeleteEventMutation,
  useGetApplicationsQuery,
  useUpdateApplicationStatusMutation,
} = api;
