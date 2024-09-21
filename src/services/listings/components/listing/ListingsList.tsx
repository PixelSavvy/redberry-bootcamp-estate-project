/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { type FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '@/hooks';
import { selectFilter } from '@/services/filter';
import { type TListing } from '@/services/listings';

import { filterListings } from '../util';
import { ListingsListItem } from './ListingsListItem';
import { ListingsSkeleton } from './ListingsSkeleton';

type TListingsListProps = {
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  data: TListing[] | undefined;
};

export const ListingsList: FC<TListingsListProps> = ({
  isLoading,
  isSuccess,
  data,
}) => {
  const filterState = useAppSelector(selectFilter);
  const [filteredListings, setFilteredListings] = useState<TListing[]>([]);

  useEffect(() => {
    if (!data) return;

    const filteredData = filterListings(data, filterState);
    setFilteredListings(filteredData);
  }, [data, filterState]);

  if (isLoading) return <ListingsSkeleton />;
  if (filteredListings.length === 0)
    return (
      <p className="text-20 text-foreground/80">
        აღნიშნული მონაცემებით განცხადება არ იძებნება
      </p>
    );

  return (
    <ul className="grid grid-cols-4 gap-5">
      {isSuccess
        ? filteredListings.map((listing) => (
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
