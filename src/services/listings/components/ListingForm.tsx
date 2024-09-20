/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import {
  Button,
  CustomFormMessage,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  RadioGroup,
  RadioGroupItem,
  Textarea,
  UploadImageInput,
} from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { cn } from '@/lib';
import { paths } from '@/router/paths';
import {
  AgentSelectInput,
  CitySelectInput,
  listingSchema,
  RegionSelectInput,
  selectListingFormPayload,
  setListingFormPayload,
  type TListing,
  usePostListingMutation,
} from '@/services/listings';
import { inputErrorClass } from '@/utils';

export const ListingForm = () => {
  const [regionId, setRegionId] = useState<string>('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const reduxFormData = useAppSelector(selectListingFormPayload);

  const form = useForm<TListing>({
    resolver: zodResolver(listingSchema),
    defaultValues: reduxFormData,
  });

  const handleChange = (
    field: keyof TListing,
    value: string | number | File,
  ) => {
    dispatch(
      setListingFormPayload({
        ...reduxFormData,
        [field]: value,
      }),
    );
  };

  useEffect(() => {
    if (reduxFormData.region_id) {
      setRegionId(reduxFormData.region_id);
    }
  }, [reduxFormData.region_id]);

  const navigate = useNavigate();

  const [postListing] = usePostListingMutation();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      form.setValue('image', file, { shouldValidate: true });
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    form.setValue('image', {} as File);
    handleChange('image', {} as File);
  };

  const onSubmit = async (payload: TListing) => {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await postListing(formData);
    // dispatch(resetListingFormPayload());
    navigate(paths.listings);
  };

  return (
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
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl className="grid grid-cols-2">
                  <RadioGroup
                    defaultChecked
                    className="flex items-center justify-start gap-[5.25rem]"
                    defaultValue="0"
                    name="is_rental"
                    value={field.value}
                    onValueChange={field.onChange}
                    onChange={() => {
                      field.onChange(field.value);
                      handleChange('is_rental', field.value);
                    }}
                  >
                    <FormItem className="flex items-center justify-start gap-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem id="0" type="button" value="0" />
                      </FormControl>
                      <FormLabel className="font-normal" htmlFor="0">
                        იყიდება
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center justify-start gap-2 space-y-0">
                      <FormControl>
                        <RadioGroupItem id="1" type="button" value="1" />
                      </FormControl>
                      <FormLabel className="font-normal" htmlFor="1">
                        ქირავდება
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <CustomFormMessage fieldState={fieldState} />
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
                <FormLabel htmlFor="address">მისამართი*</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="address"
                    className={inputErrorClass(Boolean(fieldState.error))}
                    id="address"
                    type="text"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleChange('address', e.target.value);
                    }}
                  />
                </FormControl>
                <CustomFormMessage
                  fieldState={fieldState}
                  message="მინიმუმ ორი სიმბოლო"
                />
              </FormItem>
            )}
          />
          {/* ZipCode */}
          <FormField
            control={form.control}
            name="zip_code"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel htmlFor="zip_code">საფოსტო ინდექსი*</FormLabel>
                <FormControl>
                  <Input
                    className={inputErrorClass(Boolean(fieldState.error))}
                    id="zip_code"
                    {...field}
                    type="number"
                    onChange={(e) => {
                      field.onChange(e);
                      handleChange('zip_code', e.target.value);
                    }}
                  />
                </FormControl>
                <CustomFormMessage
                  fieldState={fieldState}
                  message="მხოლოდ რიცხვები"
                />
              </FormItem>
            )}
          />
          {/* Region */}
          <FormField
            control={form.control}
            name="region_id"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel htmlFor="region_id">რეგიონი</FormLabel>
                <FormControl>
                  <RegionSelectInput
                    value={field.value}
                    onValueChange={(id) => {
                      form.setValue('region_id', id);
                      form.clearErrors('region_id');
                      field.onChange(id);
                      setRegionId(id);
                      handleChange('region_id', id);
                    }}
                  />
                </FormControl>
                <CustomFormMessage fieldState={fieldState} />
              </FormItem>
            )}
          />
          {/* City */}
          <FormField
            control={form.control}
            name="city_id"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel htmlFor="city_id">ქალაქი</FormLabel>
                <FormControl>
                  <CitySelectInput
                    regionId={regionId}
                    value={field.value.toString()}
                    onValueChange={(id) => {
                      form.setValue('city_id', id);
                      form.clearErrors('city_id');
                      field.onChange(id);
                      handleChange('city_id', id);
                    }}
                  />
                </FormControl>
                <CustomFormMessage fieldState={fieldState} />
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
              <FormItem className="relative">
                <FormLabel htmlFor="price">ფასი</FormLabel>
                <FormControl>
                  <Input
                    className={inputErrorClass(Boolean(fieldState.error))}
                    id="price"
                    type="number"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleChange('price', e.target.value);
                    }}
                  />
                </FormControl>
                <span className="absolute right-2.5 top-1/4 translate-y-1/2 transform text-[#2D3648]">
                  &#8382;
                </span>
                <CustomFormMessage
                  fieldState={fieldState}
                  message="მხოლოდ რიცხვები"
                />
              </FormItem>
            )}
          />
          {/* Area */}
          <FormField
            control={form.control}
            name="area"
            render={({ field, fieldState }) => (
              <FormItem className="relative">
                <FormLabel htmlFor="area">ფართობი</FormLabel>
                <FormControl>
                  <Input
                    className={inputErrorClass(Boolean(fieldState.error))}
                    {...field}
                    id="area"
                    type="number"
                    onChange={(e) => {
                      field.onChange(e);
                      handleChange('area', e.target.value);
                    }}
                  />
                </FormControl>
                <span className="absolute right-2.5 top-1/4 translate-y-1/2 transform text-[#2D3648]">
                  მ<sup>2</sup>
                </span>
                <CustomFormMessage
                  fieldState={fieldState}
                  message="მხოლოდ რიცხვები"
                />
              </FormItem>
            )}
          />
          {/* Bedrooms */}
          <FormField
            control={form.control}
            name="bedrooms"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel htmlFor="bedrooms">
                  საძინებლების რაოდენობა*
                </FormLabel>
                <FormControl>
                  <Input
                    className={inputErrorClass(Boolean(fieldState.error))}
                    {...field}
                    id="bedrooms"
                    type="number"
                    onChange={(e) => {
                      field.onChange(e);
                      handleChange('bedrooms', e.target.value);
                    }}
                  />
                </FormControl>
                <CustomFormMessage
                  fieldState={fieldState}
                  message="მხოლოდ რიცხვები"
                />
              </FormItem>
            )}
          />
          {/* Desription */}
          <FormField
            control={form.control}
            name="description"
            render={({ field, fieldState }) => (
              <FormItem className="col-span-2">
                <FormLabel htmlFor="description">აღწერა*</FormLabel>
                <FormControl>
                  <Textarea
                    className={cn(fieldState.error ? 'border-primary' : '')}
                    id="description"
                    rows={6}
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      handleChange('description', e.target.value);
                    }}
                  />
                </FormControl>
                <CustomFormMessage
                  fieldState={fieldState}
                  message="მინიმუმ 5 სიმბოლო"
                />
              </FormItem>
            )}
          />
          {/* Image */}
          <FormField
            control={form.control}
            name="image"
            render={({ fieldState }) => (
              <FormItem className="col-span-2">
                <FormLabel htmlFor="image">ატვირთეთ ფოტო*</FormLabel>
                <FormControl
                  className={cn(
                    fieldState.error ?? 'border-primary',

                    'relative h-[7.5rem] w-full cursor-pointer rounded-8 border border-dashed border-[#2D3648]',
                  )}
                >
                  <UploadImageInput
                    handleImageChange={handleImageChange}
                    handleRemoveImage={handleRemoveImage}
                    id="image"
                    isError={Boolean(fieldState.error)}
                    selectedImage={selectedImage}
                  />
                </FormControl>
                <CustomFormMessage
                  fieldState={fieldState}
                  message="დაშვებული ფორმატები: png, jpg, jpeg, webp"
                />
              </FormItem>
            )}
          />
        </div>
        {/* Agent */}
        <div className="grid w-full grid-cols-2 space-y-5">
          <h2 className="col-span-2 font-medium uppercase text-[#1A1A1F]">
            {/* Change font family to Helvetica Neue */}
            აგენტი
          </h2>
          <FormField
            control={form.control}
            name="agent_id"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel htmlFor="agent_id">აირჩიე</FormLabel>
                <FormControl>
                  <AgentSelectInput
                    value={field.value.toString()}
                    onValueChange={(id) => {
                      form.setValue('agent_id', id);
                      form.clearErrors('agent_id');
                      field.onChange(id);
                      handleChange('agent_id', id);
                    }}
                  />
                </FormControl>
                <CustomFormMessage fieldState={fieldState} />
              </FormItem>
            )}
          />
        </div>
        {/* CTA */}
        <div className="ml-auto mt-[5.75rem] space-x-4">
          <Button asChild variant="secondary">
            <Link to={paths.listings}>გააუქმე</Link>
          </Button>
          <Button type="submit">დაამატე ლისტინგი</Button>
        </div>
      </form>
    </Form>
  );
};
