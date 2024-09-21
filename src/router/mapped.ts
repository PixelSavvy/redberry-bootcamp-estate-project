import { elements } from './elements';
import { paths } from './paths';

export const mapped = {
  root: {
    path: paths.root,
    element: elements.root,
  },
  public: [
    {
      path: paths.listings,
      element: elements.listings,
    },
    {
      path: paths.listing,
      element: elements.listing,
    },

    {
      path: paths.addListing,
      element: elements.addListing,
    },
  ],
};
