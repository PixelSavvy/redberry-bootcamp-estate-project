import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API,
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_AUTH_TOKEN;
      if (!token) return headers;
      headers.set('authorization', `Bearer ${token}`);
    },
  }),
  tagTypes: ['Regions', 'Agents', 'Listings'],
  endpoints: (_builder) => ({}),
});
