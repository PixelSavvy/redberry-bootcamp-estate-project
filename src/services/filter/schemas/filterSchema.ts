import * as z from 'zod';

const regionsSchema = z.array(z.object({ id: z.number(), name: z.string() }));

const priceSchema = z.object({
  min: z.number(),
  max: z.number(),
});
const areaSchema = z.object({
  min: z.number(),
  max: z.number(),
});
const numberOfRoomsSchema = z.object({
  n: z.number(),
});
const filterSchema = z.object({
  regions: regionsSchema,
  price: priceSchema,
  area: areaSchema,
  numberOfRooms: numberOfRoomsSchema,
});

type TFilter = z.infer<typeof filterSchema>;

export type { TFilter, filterSchema };
