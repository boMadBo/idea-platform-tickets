import { config } from '@/config';
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const instance = `${config.baseUrl}:3002/`;

export const baseQuery = fetchBaseQuery({
  baseUrl: instance,
  prepareHeaders: headers => headers,
});
