import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_LISTINGS_API,
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_AUTH_TOKEN;
      if (!token) return headers;
      headers.set('authorization', `Bearer ${token}`);
    },
  }),
  endpoints: () => ({}),
});
