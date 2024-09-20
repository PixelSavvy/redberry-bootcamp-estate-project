import React, { type FC } from 'react';

import {
  Button,
  DeleteIconRounded,
  Input,
  PlusIconRounded,
} from '@/components/ui';

type TUploadImageInputProps = {
  selectedImage: string | null;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRemoveImage: () => void;
  isError: boolean;
  id: string;
};

export const UploadImageInput: FC<TUploadImageInputProps> = ({
  selectedImage,
  handleImageChange,
  handleRemoveImage,
  isError,
  id,
}) => {
  return (
    <div
      className={`relative h-[8.5rem] w-full cursor-pointer rounded-8 border border-dashed ${
        isError ? 'border-primary' : 'border-[#2D3648]'
      }`}
    >
      {selectedImage ? (
        <div className="relative flex h-full items-center justify-center">
          <img
            alt="Upload Preview"
            className="aspect-square h-20 w-20 rounded-4 object-cover"
            src={selectedImage}
          />
          <div className="absolute left-[55%] top-[80%] -translate-x-1/2 -translate-y-1/2 transform">
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
        <div className="relative flex h-full items-center justify-center">
          <Input
            accept="image/*"
            className="target-input absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
            id={id}
            type="file"
            onChange={handleImageChange}
          />
          <div className="absolute inset-0 z-0 flex h-full items-center justify-center">
            <PlusIconRounded />
          </div>
        </div>
      )}
    </div>
  );
};
