/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  CheckedIcon,
  DeleteIconRounded,
  DialogClose,
  DialogFooter,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
  PlusIconRounded,
} from '@/components/ui';
import {
  agentSchema,
  defaultValues,
  type TAgent,
} from '@/services/agents/schemas/agentSchema';

export const AgentForm = () => {
  const form = useForm<TAgent>({
    mode: 'onSubmit',
    defaultValues,
    resolver: zodResolver(agentSchema),
  });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      form.setValue('avatar', file, { shouldValidate: true }); // Сохраняем файл в состояние формы
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    form.setValue('avatar', undefined);
  };

  const onSubmit = (_payload: TAgent) => {};

  return (
    <Form {...form}>
      <form
        className="grid w-full grid-cols-2 gap-x-7 gap-y-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="firstName">სახელი*</FormLabel>
              <FormControl>
                <Input {...field} id="firstName" name="firstName" type="text" />
              </FormControl>
              <FormDescription className="flex items-center justify-start gap-2">
                <CheckedIcon className="stroke-current" />
                <span>მინიმум ორი სიმბოლო</span>
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="lastName">გვარი*</FormLabel>
              <FormControl>
                <Input {...field} id="lastName" name="lastName" type="text" />
              </FormControl>
              <FormDescription className="flex items-center justify-start gap-2">
                <CheckedIcon className="stroke-current" />
                <span>მინიმум ორი სიმბოლო</span>
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">ელ. ფოსტა*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="email"
                  id="email"
                  name="email"
                  type="email"
                />
              </FormControl>
              <FormDescription className="flex items-center justify-start gap-2">
                <CheckedIcon className="stroke-current" />
                <span>გამოიყენეთ @redberry.ge ფოსტა</span>
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="phone">ტელეფონის ნომერი</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="tel-country-code"
                  id="phone"
                  name="phone"
                  type="text"
                />
              </FormControl>
              <FormDescription className="flex items-center justify-start gap-2">
                <CheckedIcon className="stroke-current" />
                <span>მხოლოდ რიცხვები</span>
              </FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="avatar"
          render={({ field }) => (
            <FormItem className="relative col-span-2">
              <FormLabel htmlFor="avatar">ატვირთეთ ფოტო*</FormLabel>
              <FormControl className="relative h-[7.5rem] w-full cursor-pointer rounded-8 border border-dashed border-[#2D3648]">
                {selectedImage ? (
                  <div className="relative flex items-center justify-center">
                    <img
                      alt="Upload Preview"
                      className="rounded-4 aspect-square h-20 w-20 object-cover"
                      src={selectedImage}
                    />
                    <div className="absolute left-1/2 top-1/2 translate-x-7 translate-y-6">
                      <Button
                        className="h-6 w-6"
                        variant="icon"
                        onClick={handleRemoveImage}
                      >
                        <DeleteIconRounded />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Input
                    accept="image/*"
                    className="h-[7.5rem] opacity-0"
                    id="avatar"
                    name="avatar"
                    type="file"
                    onChange={handleImageChange}
                  />
                )}
              </FormControl>
              {!selectedImage ? (
                <div className="pointer-events-none absolute inset-0 top-5 flex h-[7.5rem] items-center justify-center rounded-8 border border-dashed border-[#2D3648]">
                  <PlusIconRounded />
                </div>
              ) : null}
            </FormItem>
          )}
        />

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
