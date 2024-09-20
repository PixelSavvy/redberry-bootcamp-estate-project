import { apiSlice } from '@/api';

const agentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAgents: builder.query({
      query: () => ({
        url: import.meta.env.VITE_AGENTS_URL,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
        },
      }),
    }),
    postAgent: builder.mutation({
      query: (payload: FormData) => ({
        url: import.meta.env.VITE_AGENTS_URL,
        method: 'POST',
        body: payload,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
        },
      }),
    }),
  }),
});

export const { useGetAgentsQuery, usePostAgentMutation } = agentsApiSlice;
