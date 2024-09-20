import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { useGetRegionsQuery } from '@/services/filter';

export const RegionSelectInput = ({
  onValueChange,
  value,
}: {
  onValueChange: (id: string) => void;
  value: string;
}) => {
  const { data: regions } = useGetRegionsQuery(null);

  return (
    <Select
      required
      name="region_id"
      value={value.toString()}
      onValueChange={(id) => {
        onValueChange(id);
      }}
    >
      <SelectTrigger id="region_id">
        <SelectValue placeholder="აირჩიეთ რეგიონი" />
      </SelectTrigger>
      <SelectContent
        hideWhenDetached
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
