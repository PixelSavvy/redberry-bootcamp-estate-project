import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { useGetCitiesQuery } from '@/services/filter';

export const CitySelectInput = ({
  onValueChange,
  regionId,
  value,
}: {
  onValueChange: (id: string) => void;
  value: string;
  regionId: string;
}) => {
  const { data: cities } = useGetCitiesQuery(null);

  const filteredCities = cities?.filter(
    (city) => city.region_id.toString() === regionId,
  );

  return (
    <Select
      required
      disabled={!regionId}
      name="city_id"
      value={value}
      onValueChange={(id) => {
        onValueChange(id);
      }}
    >
      <SelectTrigger id="city_id">
        <SelectValue placeholder="აირჩიეთ ქალაქი" />
      </SelectTrigger>
      <SelectContent
        alignOffset={0}
        avoidCollisions={false}
        side="bottom"
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        {filteredCities?.map((city) => (
          <SelectItem key={city.id} value={city.id.toString()}>
            {city.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
