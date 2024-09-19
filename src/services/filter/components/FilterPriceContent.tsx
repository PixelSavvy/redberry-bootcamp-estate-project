import { useState } from 'react';

import { Button, Input } from '@/components/ui';
import { useAppDispatch, useNumberFormatter } from '@/hooks';

import { setPriceFilter } from '../slices/filterSlice';

export const FilterPriceContent = () => {
  const { formatNumber } = useNumberFormatter();

  // Локальный стейт для значений минимальной и максимальной цены
  const [minPrice, setMinPrice] = useState<number | string>('');
  const [formattedMinPrice, setFormattedMinPrice] = useState<string>('');

  const [maxPrice, setMaxPrice] = useState<number | string>('');
  const [formattedMaxPrice, setFormattedMaxPrice] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleMinPriceClick = (value: number) => {
    setMinPrice(value);
    setFormattedMinPrice(formatNumber(value));
  };

  const handleMaxPriceClick = (value: number) => {
    setMaxPrice(value);
    setFormattedMaxPrice(formatNumber(value));
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setMinPrice(value ? parseInt(value, 10) : '');
    setFormattedMinPrice(value ? formatNumber(parseInt(value, 10)) : '');
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setMaxPrice(value ? parseInt(value, 10) : '');
    setFormattedMaxPrice(value ? formatNumber(parseInt(value, 10)) : '');
  };

  const handlePriceSelectFilter = () => {
    dispatch(
      setPriceFilter({
        min: Number(minPrice),
        max: Number(maxPrice),
      }),
    );
  };

  return (
    <>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="relative">
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-[#2D3648]">
            &#8382;
          </span>
          <Input
            className=""
            placeholder="დან"
            type="text"
            value={formattedMinPrice}
            onChange={handleMinPriceChange}
          />
        </div>
        <div className="relative">
          <span className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-[#2D3648]">
            &#8382;
          </span>
          <Input
            className=""
            placeholder="მდე"
            type="text"
            value={formattedMaxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>

      <div className="mt-6 grid w-full grid-cols-2 gap-x-6 text-14">
        <div>
          <p className="mb-4 font-medium">მინ. ფასი</p>
          <ul className="flex flex-col items-start justify-start space-y-2">
            {[50000, 100000, 150000, 200000, 300000].map((price) => (
              <Button
                key={price}
                className="h-auto p-0 font-normal hover:bg-transparent hover:text-foreground/75"
                variant="ghost"
                onClick={() => {
                  handleMinPriceClick(price);
                }}
              >
                {formatNumber(price)} &#8382;
              </Button>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 font-medium">მაქს. ფასი</p>
          <ul className="flex flex-col items-start justify-start space-y-2">
            {[50000, 100000, 150000, 200000, 300000].map((price) => (
              <Button
                key={price}
                className="h-auto p-0 font-normal hover:bg-transparent hover:text-foreground/75"
                variant="ghost"
                onClick={() => {
                  handleMaxPriceClick(price);
                }}
              >
                {formatNumber(price)} &#8382;
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
          onClick={handlePriceSelectFilter}
        >
          არჩევა
        </Button>
      </div>
    </>
  );
};
