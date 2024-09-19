import {
  Button,
  ChevronDown,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui';
import { filterData } from '@/services/filter/data/filterData';

export const Filter = () => {
  // const query = useAppSelector(selectFilter);

  return (
    <>
      {filterData.map((filter) => (
        <DropdownMenu key={filter.id} modal={false}>
          <DropdownMenuTrigger asChild className="group">
            <Button variant="ghost">
              <span>{filter.trigger}</span>
              <ChevronDown className="transition-transform group-data-[state=open]:-rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            className={`${filter.id === 0 ? '-ml-1.5' : ''} rounded-10 border p-6 shadow-filter-content`}
            side="bottom"
            sideOffset={10}
            onCloseAutoFocus={(e) => {
              e.preventDefault();
            }}
          >
            <DropdownMenuLabel className="p-0 font-medium leading-1.2">
              {filter.label}
            </DropdownMenuLabel>
            <filter.content />
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </>
  );
};
