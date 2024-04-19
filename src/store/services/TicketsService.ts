import { baseQuery } from '@/api/baseQuery';
import { ITicket } from '@/containers/tickets/types';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const ticketsAPI = createApi({
  reducerPath: 'ticketsAPI',
  baseQuery: baseQuery,
  tagTypes: ['Tickets'],
  endpoints: build => ({
    getList: build.query<ITicket[], void>({
      query: () => ({
        url: `/tickets`,
      }),
      providesTags: (result, error) => [{ type: 'Tickets', result, error }],
    }),
  }),
});
