import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '@/api';
import { agentsReducer } from '@/services/agents/slice/agentsSlice';
import { filterReducer } from '@/services/filter';

const rootReducer = combineReducers({
  filter: filterReducer,
  agents: agentsReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export { store, type TAppDispatch, type TRootState };
