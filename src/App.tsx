import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { router } from '@/router';
import { persistor } from '@/store';

import { ReduxProvider } from './providers/ReduxProvider';

export const App = () => {
  return (
    <ReduxProvider>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </ReduxProvider>
  );
};
