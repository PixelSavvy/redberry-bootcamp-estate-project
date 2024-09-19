import * as z from 'zod';

const georgianLettersRegex = /^[\u10A0-\u10FF]+$/;

const VALID_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];
const MAX_FILE_SIZE = 3 * 1024 * 1024;

const agentSchema = z.object({
  name: z
    .string({ message: 'სავალდებულოა' })
    .min(2, {
      message: 'მინიმუმ ორი სიმბოლო',
    })
    .regex(georgianLettersRegex, {
      message: 'მხოლოდ ქართული სიმბოლო',
    }),

  surname: z
    .string({ message: 'სავალდებულოა' })
    .min(2, { message: 'მინიმუმ ორი სიმბოლო' })
    .regex(georgianLettersRegex, {
      message: 'მხოლოდ ქართული სიმბოლო',
    }),

  email: z
    .string({ message: 'სავალდებულოა' })
    .email({
      message: 'არასწორი ფორმატი: example@redberry.ge',
    })
    .refine((email) => email.endsWith('@redberry.ge'), {
      message: 'გამოიყენეთ @redberry.ge ფოსტა',
    }),
  avatar: z
    .instanceof(File, {
      message: 'სავალდებულოა',
    })
    .refine((file) => VALID_IMAGE_MIME_TYPES.includes(file.type), {
      message: 'არასწორი ფორმატი',
    })
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: 'ფაილის ზომა უნდა იყოს 5MB-ზე ნაკლები',
    }),
  phone: z
    .string({ message: 'სავალდებულოა' })
    .min(9, {
      message: 'მინ. 9 ციფრი',
    })
    .max(9, { message: 'მაქს. 9 ციფრი' })
    .regex(/^5\d{8}$/, {
      message: 'არასწორი ფორმატი: 5XXXXXXXX',
    }),
});

type TAgent = z.infer<typeof agentSchema>;

const defaultValues: TAgent = {
  name: '',
  surname: '',
  email: '',
  avatar: {} as File,
  phone: '',
};

export { agentSchema, defaultValues, type TAgent };
