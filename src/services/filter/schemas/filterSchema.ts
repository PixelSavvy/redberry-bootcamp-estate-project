import * as z from 'zod';

const regionsSchema = z.array(z.object({ id: z.number(), name: z.string() }));

const citiesSchema = z.array(
  z.object({
    id: z.string(),
    name: z.string(),
    region_id: z.string(),
    region: z.object({
      id: z.string(),
      name: z.string(),
    }),
  }),
);

const priceSchema = z.object({
  min: z.number(),
  max: z.number(),
});

const areaSchema = z.object({
  min: z.number(),
  max: z.number(),
});

const numberOfRoomsSchema = z.number();

const filterSchema = z.object({
  regions: regionsSchema,
  price: priceSchema,
  area: areaSchema,
  numberOfRooms: numberOfRoomsSchema,
});

const filterDefaultValues = {
  regions: [],
  price: {
    min: 0,
    max: 0,
  },
  area: { min: 0, max: 0 },
  numberOfRooms: 0,
};

type TFilter = z.infer<typeof filterSchema>;
type TCities = z.infer<typeof citiesSchema>;

export {
  citiesSchema,
  filterDefaultValues,
  filterSchema,
  numberOfRoomsSchema,
  priceSchema,
  regionsSchema,
  type TCities,
  type TFilter,
};
