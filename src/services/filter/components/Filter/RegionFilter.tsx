/* eslint-disable react/no-array-index-key */
import { useState } from 'react';

import {
  Button,
  ChevronDown,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Skeleton,
} from '@/components/ui';
import { useAppDispatch } from '@/hooks';
import { setRegions, useGetRegionsQuery } from '@/services/filter';

export const RegionFilter = () => {
  const [selectedRegions, setSelectedRegions] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const {
    data: regions,
    isError,
    isLoading,
    isSuccess,
  } = useGetRegionsQuery(null);

  const isCheckboxChecked = (id: number) => selectedRegions.includes(id);

  const handleRegionSelect = (id: number) => {
    setSelectedRegions((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((region) => region !== id)
        : [...prevSelected, id],
    );
  };

  const handleRegionSelectFilter = () => {
    const payload = regions?.filter((region) =>
      selectedRegions.includes(region.id),
    );

    if (payload) {
      dispatch(setRegions(payload));
    }
    setIsOpen(false);
  };

  return (
    <DropdownMenu modal open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild className="group">
        <Button className="w-full" variant="ghost">
          <span>რეგიონი</span>
          <ChevronDown className="transition-transform group-data-[state=open]:-rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="rounded-10 border bg-background p-6 shadow-filter-content"
        side="bottom"
        sideOffset={10}
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DropdownMenuLabel className="p-0 font-medium leading-1.2">
          რეგიონის მიხედვით
        </DropdownMenuLabel>

        {isError ? <div>რეგიონების ჩამოტვირთვა ვერ ხერხდება</div> : null}
        {isLoading ? (
          <ul className="mt-6 grid grid-cols-3 gap-x-[3.125rem] gap-y-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-2"
              >
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
              </li>
            ))}
          </ul>
        ) : null}

        {isSuccess ? (
          <div className="mt-6 grid grid-cols-3 gap-x-[3.125rem] gap-y-4">
            {regions.map((region) => (
              <DropdownMenuCheckboxItem
                key={region.id}
                checked={isCheckboxChecked(region.id)}
                className="gap-2 p-0 data-[highlighted]:bg-transparent data-[highlighted]:text-foreground/80"
                iconClassName="stroke-background"
                spanClassName="h-[1.25rem] w-[1.25rem] rounded-2 border group-data-[state=checked]:border-green-500 group-data-[state=checked]:bg-green-500"
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
          </div>
        ) : null}

        {/* Apply Button */}
        <div className="mt-8 w-full">
          <Button
            className="ml-auto block"
            type="button"
            variant="primary_small"
            onClick={handleRegionSelectFilter}
          >
            არჩევა
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

RegionFilter.displayName = 'RegionFilter';
