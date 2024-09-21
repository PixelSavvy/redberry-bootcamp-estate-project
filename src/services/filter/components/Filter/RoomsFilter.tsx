import { useState } from 'react';

import {
  Button,
  ChevronDown,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
} from '@/components/ui';
import { useAppDispatch } from '@/hooks';
import { cn } from '@/lib';
import { setFilter } from '@/services/filter';

export const RoomsFilter = () => {
  const dispatch = useAppDispatch();
  const [rooms, setRooms] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleRoomsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = Number(value);

    if (numValue >= 0) {
      setRooms(value);
      setErrorMessage('');
    } else {
      setRooms(value);
      setErrorMessage('ჩაწერეთ ვალიდური მონაცემები');
    }
  };

  const handleRoomsSelectFilter = () => {
    const numRooms = Number(rooms);

    if (numRooms < 0) {
      setErrorMessage('ჩაწერეთ ვალიდური მონაცემები');
      return;
    }

    dispatch(
      setFilter({
        numberOfRooms: numRooms,
      }),
    );
    setIsOpen(false);
  };

  return (
    <DropdownMenu modal open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild className="group">
        <Button variant="ghost">
          <span>საძინებლების რაოდენობა</span>
          <ChevronDown className="transition-transform group-data-[state=open]:-rotate-180" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        className="rounded-10 border p-6 shadow-filter-content"
        side="bottom"
        sideOffset={10}
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DropdownMenuLabel className="p-0 font-medium leading-1.2">
          საძინებლების რაოდენობა
        </DropdownMenuLabel>
        <div className="mt-6">
          <Input
            min="0"
            placeholder="0"
            type="number"
            value={rooms}
            className={cn(
              'h-10 w-20 rounded-6',
              errorMessage && 'border-primary',
            )}
            onChange={handleRoomsChange}
          />
          {errorMessage ? (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          ) : null}
        </div>
        {/* Apply Button */}
        <div className="mt-8 w-full">
          <Button
            className="ml-auto block"
            type="button"
            variant="primary_small"
            onClick={handleRoomsSelectFilter}
          >
            არჩევა
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
