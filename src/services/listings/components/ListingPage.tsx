import { useParams } from 'react-router-dom';

import {
  AreaIcon,
  BedIcon,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  SignIcon,
} from '@/components';
import { useNumberFormatter } from '@/hooks';

import { useGetListingQuery } from '../api/listingsApiSlice';

export const ListingPage = () => {
  const { id } = useParams();

  const { data: listing } = useGetListingQuery(id ?? '');
  const { formatNumber } = useNumberFormatter();

  if (!listing) return null;

  return (
    <section className="w-full">
      <div className="grid grid-cols-2 gap-16">
        {/* image */}
        <figure className="mr-auto w-full">
          <img
            alt={listing.address}
            className="aspect-square h-full w-full rounded-t-14 object-cover"
            src={typeof listing.image === 'string' ? listing.image : ''}
          />
          <figcaption className="float-end mt-3 font-normal text-input">
            <span className="mr-1">გამოქვეყნების თარიღი:</span>
            {listing.created_at}
          </figcaption>
        </figure>
        {/* description */}
        <div className="mr-auto w-[31.5rem]">
          <Card className="flex min-h-full w-full flex-col rounded-14 border-none shadow-none">
            <CardHeader className="p-0">
              <div className="p-6">
                <CardTitle className="mb-6 text-48 font-bold">
                  {formatNumber(Number(listing.price))} &#8382;
                </CardTitle>
                <CardDescription className="flex flex-col items-start justify-start gap-4 font-normal text-foreground/70">
                  <div className="flex items-center justify-start gap-1 text-24 text-input">
                    <LocationIcon />
                    <span>{listing.city?.name}</span>
                    <span>,</span>
                    <span>{listing.address}</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-24 text-input">
                    <AreaIcon />
                    <span>ფართი: </span>
                    {listing.area}
                  </div>
                  <div className="flex items-center justify-between gap-1 text-24 text-input">
                    <BedIcon />
                    <span>საძინებელი: </span>
                    {listing.bedrooms}
                  </div>

                  <div className="flex items-center justify-between gap-1 text-24 text-input">
                    <SignIcon />
                    <span>საფოსტო ინდექსი: </span>
                    {listing.zip_code}
                  </div>
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{listing.description}</p>
            </CardContent>
            {/* Agent */}
            <CardFooter className="mt-auto space-y-4 rounded-8 border p-6">
              {/* Agent details */}
              <div className="flex items-center justify-start gap-4">
                {/* image */}
                <div>
                  <img
                    alt={listing.agent?.name}
                    className="h-[4.5rem] w-[4.5rem] rounded-full object-cover object-center"
                    src={listing.agent?.avatar}
                  />
                </div>
                {/* name */}
                <div className="flex flex-col place-items-start gap-1">
                  <div className="flex items-center justify-start gap-1">
                    <p>{listing.agent?.name}</p>
                    <p>{listing.agent?.surname}</p>
                  </div>
                  <span className="text-[0.875rem] text-[#676E76]">აგენტი</span>
                </div>
              </div>
              {/* Agent Contact */}
              <div className="space-y-1 text-14 text-[#808A93]">
                <div className="flex items-center justify-start gap-1">
                  <EmailIcon />
                  <p>{listing.agent?.email}</p>
                </div>
                <div className="flex items-center justify-start gap-1">
                  <PhoneIcon />
                  <p>{listing.agent?.phone}</p>
                </div>
              </div>
            </CardFooter>

            <div className="mt-5">
              <Button variant="outline">ლისტინგის წაშლა</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
