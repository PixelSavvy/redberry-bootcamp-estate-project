import { apiSlice } from '@/api';

import { type TAgent } from '../schemas/agentSchema';

const agentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAgents: builder.query<TAgent[], null>({
      query: () => ({
        url: import.meta.env.VITE_AGENTS_URL,
        method: 'GET',
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
