import * as z from 'zod';

const georgianLettersRegex = /^[\u10A0-\u10FF]+$/;

const VALID_IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

const agentSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      message: 'მინიმუმ ორი სიმბოლო',
    })
    .regex(georgianLettersRegex, {
      message: 'მხოლოდ ქართული სიმბოლო',
    }),

  lastName: z
    .string()
    .min(2, { message: 'მინიმუმ ორი სიმბოლო' })
    .regex(georgianLettersRegex, {
      message: 'მხოლოდ ქართული სიმბოლო',
    }),

  email: z
    .string()
    .email({})
    .refine((email) => email.endsWith('@redberry.ge'), {
      message: 'გამოიყენეთ @redberry.ge ფოსტა',
    }),
  avatar: z
    .union([z.instanceof(File), z.undefined()])
    .optional()
    .refine(
      (file) =>
        file === undefined || VALID_IMAGE_MIME_TYPES.includes(file.type),
      {
        message: 'არასწორი ფორმატი',
      },
    ),
  phone: z
    .string()
    .min(9, {
      message: 'მხოლოდ 9 ციფრი',
    })
    .max(9, { message: 'მხოლოდ 9 ციფრი' })
    .regex(/^5\d{8}$/, {
      message: 'უნდა იწყებოდეს ციფრი 5-ით და შეიცავდეს 9 ციფრს',
    }),
});

type TAgent = z.infer<typeof agentSchema>;

const defaultValues: TAgent = {
  firstName: '',
  lastName: '',
  email: '',
  avatar: undefined,
  phone: '',
};

export { agentSchema, defaultValues, type TAgent };
