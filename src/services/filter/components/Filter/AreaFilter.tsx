import {
  Button,
  ChevronDown,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Input,
} from '@/components/ui';
import { useNumberFormatter } from '@/hooks';

export const AreaFilter = () => {
  const { formatNumber } = useNumberFormatter();

  // const [minArea, setMinArea] = useState<number | string>('');
  // const [formattedMinArea, setFormattedMinArea] = useState<string>('');

  // const [maxArea, setMaxArea] = useState<number | string>('');
  // const [formattedMaxArea, setFormattedMaxArea] = useState<string>('');

  // const dispatch = useAppDispatch();

  // const handleMinAreaClick = (value: number) => {
  //   setMinArea(value);
  //   setFormattedMinArea(formatNumber(value));
  // };

  // const handleMaxAreaClick = (value: number) => {
  //   setMaxArea(value);
  //   setFormattedMaxArea(formatNumber(value));
  // };

  // const handleMinAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.replace(/[^\d]/g, '');
  //   setMinArea(value ? parseInt(value, 10) : '');
  //   setFormattedMinArea(value ? formatNumber(parseInt(value, 10)) : '');
  // };

  // const handleMaxAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value.replace(/[^\d]/g, '');
  //   setMaxArea(value ? parseInt(value, 10) : '');
  //   setFormattedMaxArea(value ? formatNumber(parseInt(value, 10)) : '');
  // };

  // const handlePriceSelectFilter = () => {
  //   dispatch(
  //     setFilter({
  //       min: Number(minArea),
  //       max: Number(maxArea),
  //     }),
  //   );
  // };

  return (
    <DropdownMenu modal>
      <DropdownMenuTrigger asChild className="group">
        <Button variant="ghost">
          <span>ფართობი</span>
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
          ფართობის მიხედვით
        </DropdownMenuLabel>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="relative">
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-[#2D3648]">
              მ<sup>2</sup>
            </span>
            <Input
              className=""
              placeholder="დან"
              type="text"
              // value={formattedMinArea}
              // onChange={handleMinAreaChange}
            />
          </div>
          <div className="relative">
            <span className="absolute right-2.5 top-1/2 -translate-y-1/2 transform text-[#2D3648]">
              მ<sup>2</sup>
            </span>
            <Input
              className=""
              placeholder="მდე"
              type="text"
              // value={formattedMaxArea}
              // onChange={handleMaxAreaChange}
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
                  className="h-auto p-0 font-normal transition-colors hover:bg-transparent hover:text-foreground/60"
                  variant="ghost"
                  // onClick={() => {
                  //   handleMinAreaClick(price);
                  // }}
                >
                  {formatNumber(price)}{' '}
                  <span>
                    მ<sup>2</sup>
                  </span>
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
                  className="h-auto p-0 font-normal transition-colors hover:bg-transparent hover:text-foreground/60"
                  variant="ghost"
                  // onClick={() => {
                  //   handleMaxAreaClick(price);
                  // }}
                >
                  {formatNumber(price)}
                  <span>
                    მ<sup>2</sup>
                  </span>
                </Button>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 w-full">
          <Button
            className="ml-auto block"
            variant="primary_small"
            // onClick={handlePriceSelectFilter}
          >
            არჩევა
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
