import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { mapped } from './mapped';

export const router = createBrowserRouter([
  {
    path: mapped.root.path,
    element: (
      <Suspense fallback={<h1 className="text-red-500">Loading...</h1>}>
        <mapped.root.element />
      </Suspense>
    ),
    children: mapped.public.map((route) => ({
      path: route.path,
      element: <route.element />,
    })),
  },
]);
