/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import {
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui';

interface Region {
  id: number;
  name: string;
}

export const ListingsPage = () => {
  const [checkedRegions, setCheckedRegions] = useState<Record<number, boolean>>(
    {},
  );
  const [regions, setRegions] = useState<Region[]>([]);

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await fetch(
        'https://api.real-estate-manager.redberryinternship.ge/api/regions',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: 'Bearer 9d0a57d8-74b8-4beb-8549-6dd161378d8c',
          },
        },
      );

      if (!response.ok) {
        console.log('error');
      }

      const data = (await response.json()) as Region[];
      setRegions(data);

      // Инициализация состояния для каждого региона
      const initialCheckedState: Record<number, boolean> = {};
      data.forEach((region: { id: number }) => {
        initialCheckedState[region.id] = false; // По умолчанию все не выбраны
      });
      setCheckedRegions(initialCheckedState);
    };

    void fetchRegions();
  }, []);

  const handleCheckedChange = (regionId: number) => {
    setCheckedRegions((prevState) => ({
      ...prevState,
      [regionId]: !prevState[regionId], // Переключение состояния конкретного региона
    }));
  };

  return (
    <section className="mt-76 w-full">
      <div className="flex items-center justify-between">
        <section className="flex items-center justify-between gap-6 rounded-10 border p-[0.375rem]">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="group">
              <Button variant="ghost">
                <span>რეგიონი</span>
                <svg
                  className="transition-transform group-data-[state=open]:-rotate-180"
                  fill="none"
                  height="14"
                  viewBox="0 0 14 15"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.91247 5.33785C3.68466 5.11004 3.31532 5.11004 3.08751 5.33785C2.85971 5.56565 2.85971 5.935 3.08751 6.1628L6.58751 9.6628C6.81532 9.89061 7.18466 9.89061 7.41247 9.6628L10.9125 6.1628C11.1403 5.935 11.1403 5.56565 10.9125 5.33785C10.6847 5.11004 10.3153 5.11004 10.0875 5.33785L6.99999 8.42537L3.91247 5.33785Z"
                    fill="#021526"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="-ml-1.5 rounded-10 border p-6 shadow-filter-content"
              side="bottom"
              sideOffset={10}
              onCloseAutoFocus={(e) => {
                e.preventDefault();
              }}
            >
              <DropdownMenuLabel className="p-0 font-medium leading-1.2">
                რეგიონის მიხედვით
              </DropdownMenuLabel>
              <div className="mt-6 grid grid-cols-3 gap-x-[3.125rem] gap-y-4">
                {regions.map((region) => (
                  <DropdownMenuCheckboxItem
                    key={region.id}
                    checked={checkedRegions[region.id] ?? false}
                    className="gap-2 p-0 data-[highlighted]:bg-transparent data-[highlighted]:text-foreground/80"
                    id={`region-${region.id.toString()}`}
                    onCheckedChange={() => {
                      handleCheckedChange(region.id);
                    }}
                    onSelect={(e) => {
                      e.preventDefault();
                    }}
                  >
                    {region.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </div>
              <div className="mt-8 w-full">
                <Button className="ml-auto block" variant="primary_small">
                  არჩევა
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
      </div>
    </section>
  );
};
