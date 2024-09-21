import { Link } from 'react-router-dom';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components';

import { ListingsListItem } from './ListingsListItem';
import { ListingsSkeleton } from './ListingsSkeleton';
import { useGetListingsQuery } from '../../api/listingsApiSlice';

export const ListingCarousel = () => {
  const { data, isLoading } = useGetListingsQuery(null);

  if (isLoading) return <ListingsSkeleton />;

  if (!data) return null;

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-4">
        {data.map((listing) => (
          <Link
            key={listing.id}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            to={`/listings/${listing.id!.toString()}`}
          >
            <CarouselItem className="basis-1/4">
              <ListingsListItem listing={listing} />
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
