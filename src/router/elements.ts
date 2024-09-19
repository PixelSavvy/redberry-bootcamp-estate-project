import { lazy } from 'react';

const RootLayout = lazy(() =>
  import('@/components').then((module) => ({ default: module.RootLayout })),
);
const ListingsPage = lazy(() =>
  import('@/services/listings/pages/ListingsPage').then((module) => ({
    default: module.ListingsPage,
  })),
);

const AddListingPage = lazy(() =>
  import('@/services/listings/pages/AddListingPage').then((module) => ({
    default: module.AddListingPage,
  })),
);

export const elements = {
  root: RootLayout,
  listings: ListingsPage,
  addListing: AddListingPage,
};
