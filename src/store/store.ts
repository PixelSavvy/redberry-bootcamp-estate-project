import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './slices';

const rootReducer = combineReducers({
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

export { store, type TAppDispatch, type TRootState };
