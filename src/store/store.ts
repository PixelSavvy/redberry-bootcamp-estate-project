import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { filterApi } from '@/services/filter/api/filterApiSlice';
import { filterReducer } from '@/services/filter/slices/filterSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  [filterApi.reducerPath]: filterApi.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filterApi.middleware),
});

setupListeners(store.dispatch);

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export { store, type TAppDispatch, type TRootState };
