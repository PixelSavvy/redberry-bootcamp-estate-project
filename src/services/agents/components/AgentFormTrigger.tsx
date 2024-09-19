import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
  PlusIcon,
} from '@/components/ui';

import { AgentForm } from './AgentForm';

export const AgentFormTrigger = () => {
  return (
    <Dialog defaultOpen modal>
      <DialogOverlay className="bg-foreground/30" />
      <DialogTrigger asChild>
        <Button variant="secondary">
          <PlusIcon className="fill-current" />
          <span>აგენტის დამატება</span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className="flex w-[62.5rem] flex-col items-center justify-between px-[6.5rem] py-[5.5rem]"
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader className="mb-[3.75rem]">
          <DialogTitle className="text-[2rem] font-medium">
            აგენტის დამატება
          </DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <section className="w-full">
          <AgentForm />
        </section>
      </DialogContent>
    </Dialog>
  );
};
