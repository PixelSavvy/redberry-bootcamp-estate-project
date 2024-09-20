import * as z from 'zod';

const listingSchema = z.object({
  address: z.string().min(2),
  region_id: z.number(),
  description: z.string().min(5),
  city_id: z.number(),
  zip_code: z.string(),
  price: z.number(),
  area: z.number(),
  bedrooms: z.number(),
  is_rental: z.union([z.literal(0), z.literal(1)]),
  agent_id: z.number(),
});

type TListing = z.infer<typeof listingSchema>;

const defaultValues: TListing = {
  address: '',
  region_id: 0,
  description: '',
  city_id: 0,
  zip_code: '',
  price: 0,
  area: 0,
  bedrooms: 0,
  is_rental: 0,
  agent_id: 0,
};

export { defaultValues, listingSchema, type TListing };
