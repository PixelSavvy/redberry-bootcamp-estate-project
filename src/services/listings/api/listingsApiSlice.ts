import { apiSlice } from '@/api';

import { type TListing } from '../schemas/listingSchema';

const listingsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getListings: builder.query<TListing[], null>({
      query: () => import.meta.env.VITE_LISTINGS_URL,
    }),

    getListing: builder.query<TListing, string>({
      query: (id) => `${import.meta.env.VITE_LISTINGS_URL}/${id}`,
    }),

    postListing: builder.mutation({
      query: (payload: FormData) => ({
        url: import.meta.env.VITE_LISTINGS_URL,
        method: 'POST',
        body: payload,
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
        },
      }),
    }),

    deleteListing: builder.mutation({
      query: (id: string) => ({
        url: `${import.meta.env.VITE_LISTINGS_URL}/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN}`,
        },
      }),
    }),
  }),
});

export const {
  useGetListingsQuery,
  useGetListingQuery,
  usePostListingMutation,
  useDeleteListingMutation,
} = listingsApiSlice;
