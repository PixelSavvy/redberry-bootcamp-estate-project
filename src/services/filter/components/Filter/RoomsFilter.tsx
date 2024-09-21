import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  Button,
  ChevronDown,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
} from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { cn } from '@/lib';
import { selectNumberOfRooms, setNumberOfRooms } from '@/services/filter';

export const RoomsFilter = () => {
  const dispatch = useAppDispatch();
  const roomsState = useAppSelector(selectNumberOfRooms);
  const [searchParams, setSearchParams] = useSearchParams();
  const [rooms, setRooms] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const queryRooms = searchParams.get('rooms');

    if (queryRooms) {
      setRooms(queryRooms);
    } else if (roomsState !== 0) {
      setRooms(roomsState.toString());
    } else {
      setRooms('');
    }
  }, [roomsState, searchParams]);

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

    dispatch(setNumberOfRooms(numRooms));

    setSearchParams({
      rooms,
    });

    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('rooms', rooms);
    setSearchParams(currentParams);

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
        className="w-[17.75rem] rounded-10 border bg-background p-6 shadow-filter-content"
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
            placeholder="2"
            type="number"
            value={rooms}
            className={cn(
              'h-10 w-20 rounded-6 placeholder:text-foreground/40',
              errorMessage && 'border-primary',
            )}
            onChange={handleRoomsChange}
          />
          {errorMessage ? (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          ) : null}
        </div>

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
