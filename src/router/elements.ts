import { lazy } from 'react';

const RootLayout = lazy(() =>
  import('@/components').then((module) => ({ default: module.RootLayout })),
);
const ListingsPage = lazy(() =>
  import('@/pages').then((module) => ({ default: module.ListingsPage })),
);

export const elements = {
  root: RootLayout,
  listings: ListingsPage,
};
