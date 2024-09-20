import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

import { apiSlice } from '@/api';
import { agentsReducer } from '@/services/agents/slice/agentsSlice';
import { filterReducer } from '@/services/filter';
import { listingFormReducer } from '@/services/listings/slice/listingFormSlice';

const rootReducer = combineReducers({
  filter: filterReducer,
  agents: agentsReducer,
  listingFormPayload: listingFormReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {},
    }).concat(apiSlice.middleware),
});

type TRootState = ReturnType<typeof store.getState>;
type TAppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { persistor, store, type TAppDispatch, type TRootState };
