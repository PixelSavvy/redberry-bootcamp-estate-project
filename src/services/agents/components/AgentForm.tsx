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

import { usePostAgentMutation } from '../api/agentsApiSlice';

export const AgentForm = () => {
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
  };

  return (
    <Form {...form}>
      <form
        className="grid w-full grid-cols-2 gap-x-7 gap-y-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="name">სახელი*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={fieldState.error ? 'border-primary' : ''}
                  id="name"
                  name="name"
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
        <FormField
          control={form.control}
          name="surname"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel htmlFor="surname">გვარი*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={fieldState.error ? 'border-primary' : ''}
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
                  className={fieldState.error ? 'border-primary' : ''}
                  id="email"
                  name="email"
                  type="email"
                />
              </FormControl>
              <FormDescription
                className={`flex items-center justify-start gap-2 ${fieldState.error ? 'text-primary' : ''} ${!fieldState.error && fieldState.isDirty ? 'text-success' : ''} ${!fieldState.error && !fieldState.isTouched ? 'text-foreground' : ''} `}
              >
                <CheckedIcon className="stroke-current" />
                {fieldState.error ? (
                  fieldState.error.message
                ) : (
                  <span>გამოიყენეთ @redberry.ge ფოსტა</span>
                )}
              </FormDescription>
            </FormItem>
          )}
        />
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
                  className={fieldState.error ? 'border-primary' : ''}
                  id="phone"
                  name="phone"
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
        <FormField
          control={form.control}
          name="avatar"
          render={({ fieldState }) => (
            <FormItem className="relative col-span-2">
              <FormLabel htmlFor="avatar">ატვირთეთ ფოტო*</FormLabel>
              <FormControl
                className={`relative h-[7.5rem] w-full cursor-pointer rounded-8 border border-dashed ${fieldState.error ? 'border-primary' : 'border-[#2D3648]'}`}
              >
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
                <div
                  className={`pointer-events-none absolute inset-0 top-5 flex h-[7.5rem] items-center justify-center rounded-8 border border-dashed ${fieldState.error ? 'border-primary' : 'border-[#2D3648]'}`}
                >
                  <PlusIconRounded />
                </div>
              ) : null}

              <FormDescription
                className={`flex items-center justify-start gap-2 ${fieldState.error ? 'text-primary' : ''} ${!fieldState.error && fieldState.isDirty ? 'text-success' : ''} ${!fieldState.error && !fieldState.isTouched ? 'text-foreground' : ''} `}
              >
                <CheckedIcon className="stroke-current" />
                {fieldState.error ? (
                  fieldState.error.message
                ) : (
                  <span>დაშვებული ფორმატები: png, jpg, jpeg, webp</span>
                )}
              </FormDescription>
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
