import { type TFilter } from '@/services/filter';
import { type TListing } from '@/services/listings';

export const filterListings = (
  payload: TListing[],
  filter: TFilter,
): TListing[] => {
  const isAnyFilterActive =
    filter.regions.length > 0 ||
    filter.price.min !== 0 ||
    filter.price.max !== 0 ||
    filter.area.min !== 0 ||
    filter.area.max !== 0 ||
    filter.numberOfRooms !== 0;

  if (!isAnyFilterActive) return payload;

  return payload.filter((listing) => {
    const isRegionMatched = filter.regions.some(
      (region) => region.id === listing.city?.region_id,
    );

    const isPriceMatched =
      Number(listing.price) >= filter.price.min &&
      Number(listing.price) <= filter.price.max;

    const isAreaMatched =
      Number(listing.area) >= filter.area.min &&
      Number(listing.area) <= filter.area.max;

    const isRoomMatched = Number(listing.bedrooms) === filter.numberOfRooms;

    return isRegionMatched || isPriceMatched || isAreaMatched || isRoomMatched;
  });
};
