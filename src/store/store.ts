import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { agentsReducer } from '@/services/agents/slice/agentsSlice';
import { filterReducer } from '@/services/filter/slices/filterSlice';

import { api } from './apiSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  agents: agentsReducer,
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export { store, type TAppDispatch, type TRootState };
