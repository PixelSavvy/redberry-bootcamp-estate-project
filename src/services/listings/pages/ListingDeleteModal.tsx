/* eslint-disable @typescript-eslint/no-misused-promises */
import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import {
  Button,
  CrossIcon,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from '@/components';
import { paths } from '@/router/paths';
import { useDeleteListingMutation } from '@/services/listings';

type TListinDeleteModalProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  id: string;
};

export const ListingDeleteModal: FC<TListinDeleteModalProps> = ({
  isDialogOpen,
  setIsDialogOpen,
  id,
}) => {
  const navigate = useNavigate();

  const [deleteListing, { isLoading, isSuccess }] = useDeleteListingMutation();

  const deleteListingHandler = async () => {
    await deleteListing(id).finally(() => {
      setIsDialogOpen(false);
      navigate(paths.listings);
    });

    isSuccess && navigate(paths.listings);
  };

  return (
    <Dialog modal open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogOverlay className="bg-foreground/10 backdrop-blur-[12px]" />

      <DialogContent
        className="flex w-[39rem] flex-col items-center justify-between gap-9 rounded-20 bg-background p-14"
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DialogClose className="absolute left-full top-0 -translate-x-10 translate-y-4">
          <CrossIcon />
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-20 font-normal text-[##2D3648]">
            გსურთ წაშალოთ ლისტინგი?
          </DialogTitle>
        </DialogHeader>
        <div className="space-x-4">
          <DialogClose asChild>
            <Button variant="secondary">გაუქმება</Button>
          </DialogClose>
          <Button
            className="space-x-1"
            disabled={isLoading}
            type="button"
            onClick={deleteListingHandler}
          >
            <ClipLoader
              aria-label="Loading Spinner"
              color="white"
              data-id="loader"
              loading={isLoading}
              size={20}
              speedMultiplier={0.75}
            />
            <span>დადასტურება</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
