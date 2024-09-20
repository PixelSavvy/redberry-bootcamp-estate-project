import * as z from 'zod';

const ONLY_NUMBER_REGEX = /^[0-9]+$/;
const ONLY_INTEGER_REGEX = /^\d+$/;

const VALID_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];
const MAX_FILE_SIZE = 1 * 1024 * 1024;

const listingSchema = z.object({
  address: z.string({ message: 'სავალდებულოა' }).min(2, {
    message: 'მინიმუმ ორი სიმბოლო',
  }),
  region_id: z.string().refine((val) => val, {
    message: 'რეგიონი სავალდებულოა',
  }),

  city_id: z.string().refine((val) => val, {
    message: 'ქალაქი სავალდებულოა',
  }),
  agent_id: z.string().refine((val) => val, {
    message: 'სავალდებულოა',
  }),

  description: z.string().min(5, {
    message: 'მინიმუმ 5 სიმბოლო',
  }),
  zip_code: z
    .string()
    .min(1, {
      message: 'სავალდებულოა',
    })
    .regex(ONLY_INTEGER_REGEX, {
      message: 'მხოლოდ მთელი ციფრები',
    }),
  price: z
    .string()
    .min(1, {
      message: 'სავალდებულოა',
    })
    .regex(ONLY_NUMBER_REGEX, {
      message: 'მხოლოდ ციფრები',
    }),
  area: z
    .string()
    .min(1, {
      message: 'სავალდებულოა',
    })
    .regex(ONLY_NUMBER_REGEX, {
      message: 'მხოლოდ ციფრები',
    }),
  bedrooms: z
    .string()
    .min(1, {
      message: 'სავალდებულოა',
    })
    .regex(ONLY_INTEGER_REGEX, {
      message: 'მხოლოდ მთელი ციფრები',
    }),

  image: z
    .instanceof(File, {
      message: 'სავალდებულოა',
    })
    .refine((file) => VALID_IMAGE_MIME_TYPES.includes(file.type), {
      message: 'არასწორი ფორმატი',
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'ფაილის ზომა უნდა იყოს 1MB-ზე ნაკლები',
    }),
  is_rental: z.union([z.literal('0'), z.literal('1')]),
});

type TListing = z.infer<typeof listingSchema>;

const defaultValues: TListing = {
  address: '',
  description: '',
  region_id: '',
  city_id: '',
  agent_id: '',
  zip_code: '',
  price: '',
  area: '',
  bedrooms: '',
  is_rental: '0',
  image: {} as File,
};

export { defaultValues, listingSchema, type TListing };
