import { type FC } from 'react';

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
import { type TListing } from '@/services/listings';

type TListingsListItemProps = {
  listing: TListing;
};

export const ListingsListItem: FC<TListingsListItemProps> = ({ listing }) => {
  const { formatNumber } = useNumberFormatter();

  const isRentalStatus = listing.is_rental === '0' ? 'იყიდება' : 'ქირავდება';

  return (
    <Card className="cursor-pointer rounded-14 p-0">
      <CardHeader className="p-0">
        <figure className="relative">
          <img
            alt={listing.address}
            src={typeof listing.image === 'string' ? listing.image : ''}
          />
          <figcaption className="absolute left-6 top-6 rounded-16 bg-foreground/50 px-2.5 py-1.5 text-12 font-medium tracking-4 text-background">
            {isRentalStatus}
          </figcaption>
        </figure>
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
  );
};
