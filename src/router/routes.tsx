import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { mapped } from './mapped';

export const router = createBrowserRouter([
  {
    path: mapped.root.path,
    element: (
      <Suspense
        fallback={
          <div className="fixed flex min-h-full w-full place-content-center bg-background">
            <h1 className="my-auto text-24 font-medium text-primary">
              იტვირთება
            </h1>
          </div>
        }
      >
        <mapped.root.element />
      </Suspense>
    ),
    children: mapped.public.map((route) => ({
      path: route.path,
      element: <route.element />,
    })),
  },
]);
