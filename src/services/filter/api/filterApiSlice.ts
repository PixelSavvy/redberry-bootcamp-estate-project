import { apiSlice } from '@/api';

import { type TCities, type TFilter } from '../schemas/filterSchema';

const filterApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRegions: builder.query<TFilter['regions'], null>({
      query: () => ({
        url: import.meta.env.VITE_REGIONS_URL,
        method: 'GET',
      }),
    }),
    getCities: builder.query<TCities, null>({
      query: () => ({
        url: import.meta.env.VITE_CITIES_URL,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetRegionsQuery, useGetCitiesQuery } = filterApiSlice;
