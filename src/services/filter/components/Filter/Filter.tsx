import { AreaFilter } from './AreaFilter';
import { PriceFilter } from './PriceFilter';
import { RegionFilter } from './RegionFilter';
import { RoomsFilter } from './RoomsFilter';

export const Filter = () => {
  return (
    <>
      <RegionFilter />
      <PriceFilter />
      <AreaFilter />
      <RoomsFilter />
    </>
  );
};
