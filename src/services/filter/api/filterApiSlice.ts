import { apiSlice } from '@/api';

import { type TFilter } from '../schemas/filterSchema';

const filterApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRegions: builder.query<TFilter['regions'], null>({
      query: () => ({
        url: import.meta.env.VITE_REGIONS_URL,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetRegionsQuery } = filterApiSlice;
