import React, { useCallback } from 'react';

import { DropdownMenuCheckboxItem } from '@/components/ui';

import { type TFilter } from '../schemas/filterSchema';

interface FilterRegionContentItemProps {
  regions: TFilter['regions'];
  selectedRegions: number[];
  setSelectedRegions: React.Dispatch<React.SetStateAction<number[]>>;
}

export const FilterRegionContentItem: React.FC<
  FilterRegionContentItemProps
> = ({ regions, selectedRegions, setSelectedRegions }) => {
  const isCheckboxChecked = useCallback(
    (id: number) => selectedRegions.includes(id),
    [selectedRegions],
  );

  const handleRegionSelect = useCallback(
    (id: number) => {
      setSelectedRegions((prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((region) => region !== id)
          : [...prevSelected, id],
      );
    },
    [setSelectedRegions],
  );

  return (
    <>
      {regions.map((region) => (
        <DropdownMenuCheckboxItem
          key={region.id}
          checked={isCheckboxChecked(region.id)}
          className="gap-2 p-0 data-[highlighted]:bg-transparent data-[highlighted]:text-foreground/80"
          iconClassName="stroke-background"
          id={`region-${region.id.toString()}`}
          spanClassName="h-[1.25rem] w-[1.25rem] rounded-2 border group-data-[state=checked]:border-success group-data-[state=checked]:bg-success"
          onCheckedChange={() => {
            handleRegionSelect(region.id);
          }}
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          {region.name}
        </DropdownMenuCheckboxItem>
      ))}
    </>
  );
};
