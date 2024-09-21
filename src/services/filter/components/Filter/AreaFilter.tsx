import { useState } from 'react';

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
import { useAppDispatch } from '@/hooks';
import { cn } from '@/lib';
import { setArea } from '@/services/filter';

import { FilterVariants } from './FilterVariants';

export const AreaFilter = () => {
  const dispatch = useAppDispatch();

  const variants = [50, 100, 150, 200, 300];

  const [minArea, setMinArea] = useState<string>('');
  const [maxArea, setMaxArea] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMinAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinArea(value);
    validateAreas(value, maxArea);
  };

  const handleMaxAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxArea(value);
    validateAreas(minArea, value);
  };

  const handleMinAreaClick = (area: string) => {
    setMinArea(area);
    validateAreas(area, maxArea);
  };

  const handleMaxAreaClick = (area: string) => {
    setMaxArea(area);
    validateAreas(minArea, area);
  };

  const validateAreas = (min: string, max: string) => {
    if (Number(min) && Number(max) && Number(min) > Number(max)) {
      setErrorMessage('ჩაწერეთ ვალიდური მონაცემები');
    } else {
      setErrorMessage('');
    }
  };

  const handleAreaSelect = () => {
    if (errorMessage) return;

    dispatch(
      setArea({
        min: Number(minArea),
        max: Number(maxArea),
      }),
    );

    setIsOpen(false);
  };

  return (
    <DropdownMenu modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild className="group">
        <Button variant="ghost">
          <span>ფართობი</span>
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
          ფართობის მიხედვით
        </DropdownMenuLabel>

        <DropdownMenuGroup className="mt-6 grid grid-cols-2 gap-4">
          <div className="relative hover:bg-transparent">
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-[#2D3648]">
              მ<sup>2</sup>
            </span>
            <Input
              className={cn(errorMessage.length > 0 ? 'border-primary' : '')}
              placeholder="დან"
              type="number"
              value={minArea !== '' ? minArea : ''}
              onChange={handleMinAreaChange}
            />
          </div>
          <div className="relative">
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-[#2D3648]">
              მ<sup>2</sup>
            </span>
            <Input
              className={cn(errorMessage.length > 0 ? 'border-primary' : '')}
              placeholder="მდე"
              type="number"
              value={maxArea !== '' ? maxArea : ''}
              onChange={handleMaxAreaChange}
            />
          </div>
          {errorMessage ? (
            <div className="col-span-2">
              <p className="-mt-2 text-12 text-primary">{errorMessage}</p>
            </div>
          ) : null}
        </DropdownMenuGroup>

        <div className="mt-6 grid w-full grid-cols-2 gap-x-6 text-14">
          <FilterVariants
            handleClick={handleMinAreaClick}
            label="მინ. მ²"
            sign="მ²"
            variants={variants}
          />
          <FilterVariants
            handleClick={handleMaxAreaClick}
            label="მაქს. მ²"
            sign="მ²"
            variants={variants}
          />
        </div>

        <div className="mt-8 w-full">
          <Button
            className="ml-auto block"
            variant="primary_small"
            onClick={handleAreaSelect}
          >
            არჩევა
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
