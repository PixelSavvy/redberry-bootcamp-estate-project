/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  CheckedIcon,
  CustomFormMessage,
  DialogClose,
  DialogFooter,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
  UploadImageInput,
} from '@/components';
import {
  agentSchema,
  defaultValues,
  type TAgent,
  usePostAgentMutation,
} from '@/services/agents';
import { inputErrorClass } from '@/utils';

export const AgentForm = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const form = useForm<TAgent>({
    defaultValues,
    resolver: zodResolver(agentSchema),
  });

  const [postAgent] = usePostAgentMutation();

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      form.setValue('avatar', file, { shouldValidate: true });
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    form.setValue('avatar', {} as File);
  };

  const onSubmit = async (payload: TAgent) => {
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('surname', payload.surname);
    formData.append('email', payload.email);
    formData.append('phone', payload.phone);
    formData.append('avatar', payload.avatar);

    await postAgent(formData);
    setIsOpen(false);
  };

  return (
    <Form {...form}>
      <form
        className="grid w-full grid-cols-2 gap-x-7 gap-y-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="name">სახელი*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={inputErrorClass(Boolean(fieldState.error))}
                  id="name"
                  name="name"
                  type="text"
                />
              </FormControl>
              <CustomFormMessage
                fieldState={fieldState}
                message="მინიმუმ ორი სიმბოლო"
              />
            </FormItem>
          )}
        />
        {/* surname */}
        <FormField
          control={form.control}
          name="surname"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="surname">გვარი*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={inputErrorClass(Boolean(fieldState.error))}
                  id="surname"
                  name="surname"
                  type="text"
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
        {/* email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="email">ელ. ფოსტა*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="email"
                  className={inputErrorClass(Boolean(fieldState.error))}
                  id="email"
                  name="email"
                  type="email"
                />
              </FormControl>
              <CustomFormMessage
                fieldState={fieldState}
                message="გამოიყენეთ @redberry.ge ფოსტა"
              />
            </FormItem>
          )}
        />
        {/* phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="phone">ტელეფონის ნომერი</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="tel-country-code"
                  className={inputErrorClass(Boolean(fieldState.error))}
                  id="phone"
                  name="phone"
                  type="text"
                />
              </FormControl>
              <CustomFormMessage
                fieldState={fieldState}
                message="მინიმუმ ორი სიმბოლო"
              />
            </FormItem>
          )}
        />
        {/* avatar */}
        <FormField
          control={form.control}
          name="avatar"
          render={({ fieldState }) => (
            <FormItem className="relative col-span-2">
              <FormLabel htmlFor="avatar">ატვირთეთ ფოტო*</FormLabel>
              <FormControl className="relative w-full">
                <UploadImageInput
                  handleImageChange={handleImageChange}
                  handleRemoveImage={handleRemoveImage}
                  id="avatar"
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

        {/* Actions */}
        <DialogFooter className="col-span-2 mt-24 flex items-center justify-between gap-2">
          <DialogClose asChild>
            <Button variant="secondary">გაუქმება</Button>
          </DialogClose>

          <Button className="m-0" type="submit">
            დაამატე აგენტი
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};
