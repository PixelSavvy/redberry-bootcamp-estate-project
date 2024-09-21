import { AreaFilter } from './AreaFilter';
import { PriceFilter } from './PriceFilter';
import { RegionFilter } from './RegionFilter';
import { RoomsFilter } from './RoomsFilter';

export const Filter = () => {
  return (
    <ul className="flex items-center justify-between gap-6 rounded-10 border p-[0.375rem]">
      <RegionFilter />
      <PriceFilter />
      <AreaFilter />
      <RoomsFilter />
    </ul>
  );
};
