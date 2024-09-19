import { api } from '@/store/apiSlice';

const filterApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRegions: builder.query({
      query: () => ({
        url: '/regions',
        method: 'GET',
        validateStatus: (response) => {
          return response.status === 200;
        },
      }),
    }),
  }),
});

const { useGetRegionsQuery } = filterApi;

export { filterApi, useGetRegionsQuery };
