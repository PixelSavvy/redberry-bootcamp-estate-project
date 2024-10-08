import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Button,
  ChevronDown,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
} from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { cn } from '@/lib';
import { selectPrice, setPrice } from '@/services/filter';

import { FilterVariants } from './FilterVariants';

export const PriceFilter = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const variants = [50000, 100000, 150000, 200000, 300000];

  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const priceState = useAppSelector(selectPrice);

  useEffect(() => {
    const queryMinPrice = searchParams.get('minPrice');
    const queryMaxPrice = searchParams.get('maxPrice');

    if (queryMinPrice) {
      setMinPrice(queryMinPrice);
    } else if (priceState.min !== 0) {
      setMinPrice(priceState.min.toString());
    }

    if (queryMaxPrice) {
      setMaxPrice(queryMaxPrice);
    } else if (priceState.max !== 0) {
      setMaxPrice(priceState.max.toString());
    }
  }, [searchParams, priceState]);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value);
    validatePrices(value, maxPrice);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value);
    validatePrices(minPrice, value);
  };

  const handleMinPriceClick = (price: string) => {
    setMinPrice(price);
    validatePrices(price, maxPrice);
  };

  const handleMaxPriceClick = (price: string) => {
    setMaxPrice(price);
    validatePrices(minPrice, price);
  };

  const validatePrices = (min: string, max: string) => {
    if (Number(min) && Number(max) && Number(min) > Number(max)) {
      setErrorMessage('ჩაწერეთ ვალიდური მონაცემები');
    } else {
      setErrorMessage('');
    }
  };

  const handlePriceSelect = () => {
    if (errorMessage) return;

    dispatch(
      setPrice({
        min: Number(minPrice),
        max: Number(maxPrice),
      }),
    );

    const currentParams = new URLSearchParams(searchParams.toString());

    if (minPrice) {
      currentParams.set('minPrice', minPrice);
    } else {
      currentParams.delete('minPrice');
    }

    if (maxPrice) {
      currentParams.set('maxPrice', maxPrice);
    } else {
      currentParams.delete('maxPrice');
    }

    setSearchParams(currentParams);

    setIsOpen(false);
  };

  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild className="group">
        <Button variant="ghost">
          <span>საფასო კატეგორია</span>
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
          ფასის მიხედვით
        </DropdownMenuLabel>

        <DropdownMenuGroup className="mt-6 grid grid-cols-2 gap-4">
          <div className="relative hover:bg-transparent">
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-[#2D3648]">
              &#8382;
            </span>
            <Input
              placeholder="დან"
              type="number"
              value={minPrice !== '' ? minPrice : ''}
              className={cn(
                errorMessage.length > 0 ? 'border-primary' : '',
                'placeholder:text-foreground/40',
              )}
              onChange={handleMinPriceChange}
            />
          </div>
          <div className="relative">
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-[#2D3648]">
              &#8382;
            </span>
            <Input
              placeholder="მდე"
              type="number"
              value={maxPrice !== '' ? maxPrice : ''}
              className={cn(
                errorMessage.length > 0 ? 'border-primary' : '',
                'placeholder:text-foreground/40',
              )}
              onChange={handleMaxPriceChange}
            />
          </div>
          {errorMessage ? (
            <div className="col-span-2 -mt-2">
              <p className="text-12 text-primary">{errorMessage}</p>
            </div>
          ) : null}
        </DropdownMenuGroup>

        <div className="mt-6 grid w-full grid-cols-2 gap-x-6 text-14">
          <FilterVariants
            handleClick={handleMinPriceClick}
            label="მინ. ფასი"
            sign="₾"
            variants={variants}
          />
          <FilterVariants
            handleClick={handleMaxPriceClick}
            label="მაქს. ფასი"
            sign="₾"
            variants={variants}
          />
        </div>

        <div className="mt-8 w-full">
          <Button
            className="ml-auto block"
            variant="primary_small"
            onClick={handlePriceSelect}
          >
            არჩევა
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
