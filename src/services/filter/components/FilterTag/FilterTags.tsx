import { useSearchParams } from 'react-router-dom';

import { Button, CrossIcon } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  removeArea,
  removeNumberOfRooms,
  removePrice,
  removeRegion,
  resetFilter,
  selectFilter,
} from '@/services/filter';

export const FilterTags = () => {
  const { regions, price, area, numberOfRooms } = useAppSelector(selectFilter);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const removeQueryParam = (param: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete(param);
    setSearchParams(newSearchParams);
  };

  return (
    <ul className="flex flex-wrap items-center justify-start gap-2">
      {/* regions */}
      {regions.map((region) => (
        <li key={region.id} className="flex items-center space-x-1">
          <Button
            className="rounded-full border px-2.5 py-2 text-[0.875rem] font-normal text-foreground/80"
            type="button"
            variant="ghost"
            onClick={() => {
              dispatch(removeRegion(region.id));

              const updatedRegions = regions.filter((r) => r.id !== region.id);
              if (updatedRegions.length > 0) {
                setSearchParams({
                  regions: updatedRegions.map((r) => r.id).join(','),
                });
              } else {
                removeQueryParam('regions');
              }
            }}
          >
            <span>{region.name}</span>

            <CrossIcon className="h-[0.875rem] w-[0.875rem]" />
          </Button>
        </li>
      ))}
      {/* price */}
      {price.min && price.max ? (
        <li className="flex items-center space-x-1">
          <Button
            className="rounded-full border px-2.5 py-2 text-[0.875rem] font-normal text-foreground/80"
            type="button"
            variant="ghost"
            onClick={() => {
              dispatch(removePrice());
              if (searchParams.has('minPrice')) removeQueryParam('minPrice');
              if (searchParams.has('maxPrice')) removeQueryParam('maxPrice');
            }}
          >
            <span>{`${price.min.toString()} ₾ - ${price.max.toString()} ₾`}</span>

            <CrossIcon className="h-[0.875rem] w-[0.875rem]" />
          </Button>
        </li>
      ) : null}
      {/* area */}
      {area.min && area.max ? (
        <li className="flex items-center space-x-1">
          <Button
            className="rounded-full border px-2.5 py-2 text-[0.875rem] font-normal text-foreground/80"
            type="button"
            variant="ghost"
            onClick={() => {
              dispatch(removeArea());
              if (searchParams.has('minArea')) removeQueryParam('minArea');
              if (searchParams.has('maxArea')) removeQueryParam('maxArea');
            }}
          >
            <span>
              {`${area.min.toString()} მ²`} - {`${area.max.toString()} მ²`}
            </span>

            <CrossIcon className="h-[0.875rem] w-[0.875rem]" />
          </Button>
        </li>
      ) : null}
      {/* numberOfRooms */}
      {numberOfRooms ? (
        <li className="flex items-center space-x-1">
          <Button
            className="rounded-full border px-2.5 py-2 text-[0.875rem] font-normal text-foreground/80"
            type="button"
            variant="ghost"
            onClick={() => {
              dispatch(removeNumberOfRooms());
              if (searchParams.has('rooms')) removeQueryParam('rooms');
            }}
          >
            <span>{numberOfRooms}</span>

            <CrossIcon className="h-[0.875rem] w-[0.875rem]" />
          </Button>
        </li>
      ) : null}

      {/* Reset filter */}
      {regions.length > 0 ||
      price.min ||
      price.max ||
      area.min ||
      area.max ||
      numberOfRooms ? (
        <li className="ml-4">
          <Button
            className="p-0 text-[0.875rem] hover:bg-transparent hover:text-foreground/60"
            type="button"
            variant="ghost"
            onClick={() => {
              dispatch(resetFilter());
              setSearchParams({});
            }}
          >
            გასუფთავება
          </Button>
        </li>
      ) : null}
    </ul>
  );
};
