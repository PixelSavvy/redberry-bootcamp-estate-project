import { lazy } from 'react';

const RootLayout = lazy(() =>
  import('@/components').then((module) => ({ default: module.RootLayout })),
);
const ListingsPage = lazy(() =>
  import('@/services/listings/pages/ListingsPage').then((module) => ({
    default: module.ListingsPage,
  })),
);

export const elements = {
  root: RootLayout,
  listings: ListingsPage,
};
