import {
  Button,
  ChevronDown,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
} from '@/components/ui';

export const RoomsFilter = () => {
  return (
    <DropdownMenu modal>
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
          <Input className="h-10 w-10 rounded-6" placeholder="2" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
