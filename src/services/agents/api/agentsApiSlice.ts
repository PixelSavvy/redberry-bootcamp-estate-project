import { api } from '@/store/apiSlice';

import { type TAgent } from '../schemas/agentSchema';

const agentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postAgent: builder.mutation({
      query: (payload: TAgent) => ({
        url: import.meta.env.VITE_AGENTS_API,
        method: 'POST',
        body: {
          ...payload,
        },
      }),
    }),

    getAgents: builder.query({
      query: () => ({
        url: import.meta.env.VITE_AGENTS_API,
        method: 'GET',
        validateStatus: (response) => {
          return response.status === 200;
        },
      }),
    }),
  }),
});

const { usePostAgentMutation, useGetAgentsQuery } = agentsApi;

export { agentsApi, useGetAgentsQuery, usePostAgentMutation };
