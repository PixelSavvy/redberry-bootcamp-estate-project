/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { type TFilter } from '@/services/filter/schemas/filterSchema';
import { api } from '@/store/apiSlice';

const filterApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRegions: build.query<TFilter['regions'], void>({
      queryFn: async () => {
        try {
          const response = await fetch(import.meta.env.VITE_REGIONS_API);

          if (!response.ok) {
            return {
              error: {
                status: response.status,
                data: 'Failed to fetch regions',
              },
            };
          }

          const data = (await response.json()) as TFilter['regions'];
          return { data };
        } catch (error) {
          return { error: { status: 500, data: 'Server error' } };
        }
      },
    }),
  }),
});

const { useGetRegionsQuery } = filterApi;

export { filterApi, useGetRegionsQuery };
