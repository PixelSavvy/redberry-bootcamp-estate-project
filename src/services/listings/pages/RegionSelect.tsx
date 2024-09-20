import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { useGetRegionsQuery } from '@/services/filter';

export const RegionSelect = () => {
  const { data: regions } = useGetRegionsQuery(null);

  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="რეგიონი" />
      </SelectTrigger>
      <SelectContent
        alignOffset={0}
        avoidCollisions={false}
        side="bottom"
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        {regions?.map((region) => (
          <SelectItem key={region.id} value={region.id.toString()}>
            {region.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
