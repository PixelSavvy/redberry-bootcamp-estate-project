import { useState } from 'react';

import { Button, Input } from '@/components/ui';
import { useAppDispatch, useNumberFormatter } from '@/hooks';

import { setAreaFilter } from '../slices/filterSlice';

export const FilterAreaContent = () => {
  const { formatNumber } = useNumberFormatter();

  // Локальный стейт для значений минимальной и максимальной цены
  const [minArea, setMinArea] = useState<number | string>('');
  const [formattedMinArea, setFormattedMinArea] = useState<string>('');

  const [maxArea, setMaxArea] = useState<number | string>('');
  const [formattedMaxArea, setFormattedMaxArea] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleMinAreaClick = (value: number) => {
    setMinArea(value);
    setFormattedMinArea(formatNumber(value));
  };

  const handleMaxAreaClick = (value: number) => {
    setMaxArea(value);
    setFormattedMaxArea(formatNumber(value));
  };

  const handleMinAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setMinArea(value ? parseInt(value, 10) : '');
    setFormattedMinArea(value ? formatNumber(parseInt(value, 10)) : '');
  };

  const handleMaxAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setMaxArea(value ? parseInt(value, 10) : '');
    setFormattedMaxArea(value ? formatNumber(parseInt(value, 10)) : '');
  };

  const handleAreaSelectFilter = () => {
    dispatch(
      setAreaFilter({
        min: Number(minArea),
        max: Number(maxArea),
      }),
    );
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="relative">
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-[#2D3648]">
            მ<sup className="text-10">2</sup>
          </span>
          <Input
            className=""
            placeholder="დან"
            type="text"
            value={formattedMinArea}
            onChange={handleMinAreaChange}
          />
        </div>
        <div className="relative">
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-[#2D3648]">
            მ<sup className="text-10">2</sup>
          </span>
          <Input
            className=""
            placeholder="მდე"
            type="text"
            value={formattedMaxArea}
            onChange={handleMaxAreaChange}
          />
        </div>
      </div>

      <div className="mt-6 grid w-full grid-cols-2 gap-x-6 text-14">
        <div>
          <p className="mb-4 font-medium">
            მინ.
            <span className="ml-2">
              მ<sup className="text-10">2</sup>
            </span>
          </p>
          <ul className="flex flex-col items-start justify-start space-y-2">
            {[50000, 100000, 150000, 200000, 300000].map((area) => (
              <Button
                key={area}
                className="h-auto p-0 font-normal hover:bg-transparent hover:text-foreground/75"
                variant="ghost"
                onClick={() => {
                  handleMinAreaClick(area);
                }}
              >
                {formatNumber(area)}{' '}
                <span>
                  მ<sup className="text-10">2</sup>
                </span>
              </Button>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 font-medium">
            მაქს.
            <span className="ml-2">
              მ<sup className="text-10">2</sup>
            </span>
          </p>
          <ul className="flex flex-col items-start justify-start space-y-2">
            {[50000, 100000, 150000, 200000, 300000].map((area) => (
              <Button
                key={area}
                className="h-auto p-0 font-normal hover:bg-transparent hover:text-foreground/75"
                variant="ghost"
                onClick={() => {
                  handleMaxAreaClick(area);
                }}
              >
                {formatNumber(area)}
                <span>
                  მ<sup className="text-10">2</sup>
                </span>
              </Button>
            ))}
          </ul>
        </div>
      </div>

      {/* Кнопка выбора */}
      <div className="mt-8 w-full">
        <Button
          className="ml-auto block"
          variant="primary_small"
          onClick={handleAreaSelectFilter}
        >
          არჩევა
        </Button>
      </div>
    </>
  );
};
