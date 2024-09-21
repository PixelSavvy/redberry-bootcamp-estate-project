/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-cycle */
import { Link } from 'react-router-dom';

import { useGetListingsQuery } from '@/services/listings';

import { ListingsListItem } from './ListingsListItem';
import { ListingsSkeleton } from './ListingsSkeleton';

export const ListingsList = () => {
  const {
    data: listings,
    isLoading,
    isError,
    isSuccess,
  } = useGetListingsQuery(null);

  if (isLoading) return <ListingsSkeleton />;
  if (isError)
    return (
      <p className="text-20 mt-16 text-foreground/80">
        აღნიშნული მონაცემებით განცხადება არ იძებნება
      </p>
    );

  return (
    <ul className="grid grid-cols-4 gap-5">
      {isSuccess
        ? listings.map((listing) => (
            <Link key={listing.id} to={`/listings/${listing.id!.toString()}`}>
              <li>
                <ListingsListItem listing={listing} />
              </li>
            </Link>
          ))
        : null}
    </ul>
  );
};
