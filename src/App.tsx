import { RouterProvider } from 'react-router-dom';

import { router } from '@/router';

import { ReduxProvider } from './providers/ReduxProvider';

export const App = () => {
  return (
    <ReduxProvider>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
};
