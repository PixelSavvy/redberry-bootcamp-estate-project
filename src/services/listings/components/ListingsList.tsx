/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable import/no-cycle */
import { Link } from 'react-router-dom';

import {
  AreaIcon,
  BedIcon,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  LocationIcon,
  SignIcon,
} from '@/components/ui';
import { useNumberFormatter } from '@/hooks';
import { useGetListingsQuery } from '@/services/listings';

import { ListingsSkeleton } from './ListingsSkeleton';

export const ListingsList = () => {
  const {
    data: listings,
    isLoading,
    isError,
    isSuccess,
  } = useGetListingsQuery(null);

  const { formatNumber } = useNumberFormatter();

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
                <Card className="cursor-pointer rounded-14 p-0">
                  <CardHeader className="p-0">
                    <div>
                      <img
                        alt={listing.address}
                        src={
                          typeof listing.image === 'string' ? listing.image : ''
                        }
                      />
                    </div>
                    <div className="p-6">
                      <CardTitle className="mb-1.5 text-28 font-bold">
                        {formatNumber(Number(listing.price))} &#8382;
                      </CardTitle>
                      <CardDescription className="flex flex-col items-start justify-start gap-0.5 text-foreground/70">
                        <div className="flex items-center justify-start gap-0.5">
                          <LocationIcon />
                          <span>{listing.city?.name}</span>
                          <span>,</span>
                          <span>{listing.address}</span>
                        </div>
                        <div className="mt-5 flex items-center justify-between gap-8">
                          <div className="flex items-center justify-between gap-0.5">
                            <BedIcon />
                            {listing.bedrooms}
                          </div>
                          <div className="flex items-center justify-between gap-0.5">
                            <AreaIcon />
                            {listing.area}
                          </div>
                          <div className="flex items-center justify-between gap-0.5">
                            <SignIcon />
                            {listing.zip_code}
                          </div>
                        </div>
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </li>
            </Link>
          ))
        : null}
    </ul>
  );
};
