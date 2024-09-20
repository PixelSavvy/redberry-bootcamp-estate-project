import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { type TRootState } from '@/store';

import { type TAgent } from '../schemas/agentSchema';

type TAgentsProps = {
  name: TAgent['name'];
  surname: TAgent['surname'];
  email: TAgent['email'];
  phone: TAgent['phone'];
  avatar: TAgent['avatar'];
}[];

const initialState: TAgentsProps = [];

const agentsSlice = createSlice({
  name: 'agents',
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<TAgentsProps>) => {
      state.push(...action.payload);
    },
  },
});

const { setAgents } = agentsSlice.actions;
const selectAgents = (state: TRootState): TAgentsProps => state.agents;
const agentsReducer = agentsSlice.reducer;

export { agentsReducer, selectAgents, setAgents };
