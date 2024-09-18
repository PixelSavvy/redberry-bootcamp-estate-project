import * as z from 'zod';

const regionSchema = z.object({
  id: z.string(),
  name: z.string(),
});

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
  region: regionSchema,
  price: priceSchema,
  area: areaSchema,
  numberOfRooms: numberOfRoomsSchema,
});

type TFilter = z.infer<typeof filterSchema>;

export type { TFilter, filterSchema };
