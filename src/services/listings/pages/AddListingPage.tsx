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
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui';

import { RegionSelect } from './RegionSelect';
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
            {/* IsRental */}
            <div className="grid w-full grid-cols-2 gap-5">
              <h2 className="col-span-2 font-medium uppercase text-[#1A1A1F]">
                {/* Change font family to Helvetica Neue */}
                გარიგების ტიპი
              </h2>

              {/* IsRental */}
              <FormField
                control={form.control}
                name="is_rental"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="grid grid-cols-2">
                      <RadioGroup
                        className="flex items-center justify-start gap-[5.25rem]"
                        defaultValue="0"
                        onValueChange={field.onChange}
                      >
                        <FormItem className="flex items-center justify-start gap-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="0" />
                          </FormControl>
                          <FormLabel className="font-normal">იყიდება</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center justify-start gap-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="1" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            ქირავდება
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {/* Location */}
            <div className="grid w-full grid-cols-2 gap-5">
              <h2 className="col-span-2 font-medium uppercase text-[#1A1A1F]">
                {/* Change font family to Helvetica Neue */}
                მდებარეობა
              </h2>
              {/* Location */}
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
              {/* ZipCode */}
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
              {/* Region */}
              <FormField
                control={form.control}
                name="region_id"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>რეგიონი</FormLabel>
                    <FormControl>
                      <Input className="opacity-0" {...field} />
                    </FormControl>
                    {/* Select region component */}
                    <div className="absolute top-5 w-full">
                      <RegionSelect />
                    </div>
                    {/* ************************ */}
                  </FormItem>
                )}
              />
              {/* City */}
              <FormField
                control={form.control}
                name="city_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ქალაქი</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {/* Flat details */}
            <div className="grid w-full grid-cols-2 gap-5">
              <h2 className="col-span-2 font-medium uppercase text-[#1A1A1F]">
                {/* Change font family to Helvetica Neue */}
                ბინის დეტალები
              </h2>

              {/* Price */}
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
              {/* Area */}
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
              {/* Bedrooms */}
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
              {/* Desription */}
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
            {/* CTA */}
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
