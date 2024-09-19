/* eslint-disable react/no-array-index-key */
import { useCallback, useState } from 'react';

import { Button, Skeleton } from '@/components/ui';
import { useAppDispatch } from '@/hooks';
import { useGetRegionsQuery } from '@/services/filter/api/filterApiSlice';
import { setRegionsFilter } from '@/services/filter/slices/filterSlice';

import { FilterRegionContentItem } from './FilterRegionContentItem';

export const FilterRegionContent = () => {
  const { data: regions, isSuccess, isLoading, isError } = useGetRegionsQuery();

  const [selectedRegions, setSelectedRegions] = useState<number[]>([]);

  const dispatch = useAppDispatch();

  const handleRegionSelectFilter = useCallback(() => {
    const payload = regions?.filter((region) =>
      selectedRegions.includes(region.id),
    );
    if (payload) {
      dispatch(setRegionsFilter([...payload]));
    }
  }, [selectedRegions, regions, dispatch]);

  return (
    <>
      {/* Error state */}
      {isError ? (
        <div className="mt-6 text-14">
          რეგიონების ჩამონათვალი ვერ ჩაიტვირთა!
        </div>
      ) : null}

      {/* Loading state */}
      {isLoading ? (
        <div className="mt-6 grid grid-cols-3 gap-x-[3.125rem] gap-y-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="flex items-start justify-between gap-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-24" />
            </div>
          ))}
        </div>
      ) : null}

      {/* Success state */}
      {isSuccess ? (
        <div className="mt-6 grid grid-cols-3 gap-x-[3.125rem] gap-y-4">
          <FilterRegionContentItem
            regions={regions}
            selectedRegions={selectedRegions}
            setSelectedRegions={setSelectedRegions}
          />
        </div>
      ) : null}

      {/* Apply Button */}
      <div className="mt-8 w-full">
        <Button
          className="ml-auto block"
          variant="primary_small"
          onClick={handleRegionSelectFilter}
        >
          არჩევა
        </Button>
      </div>
    </>
  );
};
