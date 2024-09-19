/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Button,
  CheckedIcon,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from '@/components/ui';

import {
  defaultValues,
  listingSchema,
  type TListing,
} from '../schemas/listingSchema';

export const AddListingPage = () => {
  const form = useForm<TListing>({
    resolver: zodResolver(listingSchema),
    defaultValues,
    mode: 'onSubmit',
  });

  const onSubmit = (_data: TListing) => {};

  return (
    <>
      <h1 className="text-32 font-medium">ლისტინგის დამატება</h1>
      <section className="mb-24 mt-[3.75rem] w-[46.875rem]">
        <Form {...form}>
          <form
            className="grid grid-cols-1 gap-20"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid w-full grid-cols-2 gap-5">
              <h2 className="col-span-2 font-medium uppercase text-[#1A1A1F]">
                {/* Change font family to Helvetica Neue */}
                მდებარეობა
              </h2>

              <FormField
                control={form.control}
                name="address"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>მისამართი*</FormLabel>
                    <FormControl>
                      <Input
                        className={fieldState.error ? 'border-primary' : ''}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription
                      className={`flex items-center justify-start gap-2 ${fieldState.error ? 'text-primary' : ''} ${!fieldState.error && fieldState.isDirty ? 'text-success' : ''} ${!fieldState.error && !fieldState.isTouched ? 'text-foreground' : ''} `}
                    >
                      <CheckedIcon className="stroke-current" />
                      {fieldState.error ? (
                        fieldState.error.message
                      ) : (
                        <span>მინიმუმ ორი სიმბოლო</span>
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip_code"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>საფოსტო ინდექსი*</FormLabel>
                    <FormControl>
                      <Input
                        className={fieldState.error ? 'border-primary' : ''}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription
                      className={`flex items-center justify-start gap-2 ${fieldState.error ? 'text-primary' : ''} ${!fieldState.error && fieldState.isDirty ? 'text-success' : ''} ${!fieldState.error && !fieldState.isTouched ? 'text-foreground' : ''} `}
                    >
                      <CheckedIcon className="stroke-current" />
                      {fieldState.error ? (
                        fieldState.error.message
                      ) : (
                        <span>მხოლოდ რიცხვები</span>
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip_code"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>რეგიონი</FormLabel>
                    <FormControl>
                      <Input
                        className={fieldState.error ? 'border-primary' : ''}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription
                      className={`flex items-center justify-start gap-2 ${fieldState.error ? 'text-primary' : ''} ${!fieldState.error && fieldState.isDirty ? 'text-success' : ''} ${!fieldState.error && !fieldState.isTouched ? 'text-foreground' : ''} `}
                    >
                      <CheckedIcon className="stroke-current" />
                      {fieldState.error ? (
                        fieldState.error.message
                      ) : (
                        <span>მხოლოდ რიცხვები</span>
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zip_code"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>რეგიონი</FormLabel>
                    <FormControl>
                      <Input
                        className={fieldState.error ? 'border-primary' : ''}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription
                      className={`flex items-center justify-start gap-2 ${fieldState.error ? 'text-primary' : ''} ${!fieldState.error && fieldState.isDirty ? 'text-success' : ''} ${!fieldState.error && !fieldState.isTouched ? 'text-foreground' : ''} `}
                    >
                      <CheckedIcon className="stroke-current" />
                      {fieldState.error ? (
                        fieldState.error.message
                      ) : (
                        <span>მხოლოდ რიცხვები</span>
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid w-full grid-cols-2 gap-5">
              <h2 className="col-span-2 font-medium uppercase text-[#1A1A1F]">
                {/* Change font family to Helvetica Neue */}
                ბინის დეტალები
              </h2>

              <FormField
                control={form.control}
                name="price"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>ფასი</FormLabel>
                    <FormControl>
                      <Input
                        className={fieldState.error ? 'border-primary' : ''}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription
                      className={`flex items-center justify-start gap-2 ${fieldState.error ? 'text-primary' : ''} ${!fieldState.error && fieldState.isDirty ? 'text-success' : ''} ${!fieldState.error && !fieldState.isTouched ? 'text-foreground' : ''} `}
                    >
                      <CheckedIcon className="stroke-current" />
                      {fieldState.error ? (
                        fieldState.error.message
                      ) : (
                        <span>მინიმუმ ორი სიმბოლო</span>
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="area"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>ფართობი</FormLabel>
                    <FormControl>
                      <Input
                        className={fieldState.error ? 'border-primary' : ''}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription
                      className={`flex items-center justify-start gap-2 ${fieldState.error ? 'text-primary' : ''} ${!fieldState.error && fieldState.isDirty ? 'text-success' : ''} ${!fieldState.error && !fieldState.isTouched ? 'text-foreground' : ''} `}
                    >
                      <CheckedIcon className="stroke-current" />
                      {fieldState.error ? (
                        fieldState.error.message
                      ) : (
                        <span>მხოლოდ რიცხვები</span>
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bedrooms"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>საძინებლების რაოდენობა*</FormLabel>
                    <FormControl>
                      <Input
                        className={fieldState.error ? 'border-primary' : ''}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription
                      className={`flex items-center justify-start gap-2 ${fieldState.error ? 'text-primary' : ''} ${!fieldState.error && fieldState.isDirty ? 'text-success' : ''} ${!fieldState.error && !fieldState.isTouched ? 'text-foreground' : ''} `}
                    >
                      <CheckedIcon className="stroke-current" />
                      {fieldState.error ? (
                        fieldState.error.message
                      ) : (
                        <span>მხოლოდ რიცხვები</span>
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>აღწერა*</FormLabel>
                    <FormControl>
                      <Input
                        className={fieldState.error ? 'border-primary' : ''}
                        type=""
                        {...field}
                      />
                    </FormControl>
                    <FormDescription
                      className={`flex items-center justify-start gap-2 ${fieldState.error ? 'text-primary' : ''} ${!fieldState.error && fieldState.isDirty ? 'text-success' : ''} ${!fieldState.error && !fieldState.isTouched ? 'text-foreground' : ''} `}
                    >
                      <CheckedIcon className="stroke-current" />
                      {fieldState.error ? (
                        fieldState.error.message
                      ) : (
                        <span>მხოლოდ რიცხვები</span>
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
            </div>
            <div className="ml-auto mt-[5.75rem] space-x-4">
              <Button variant="secondary">გააუქმე</Button>
              <Button type="submit">დამატე ლისტინგი</Button>
            </div>
          </form>
        </Form>
      </section>
    </>
  );
};
