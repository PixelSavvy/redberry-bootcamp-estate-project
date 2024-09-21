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
import { AgentForm } from '@/services/agents';

export const AgentFormTrigger = ({
  isGhost,
  isOpen,
  setIsOpen,
}: {
  isGhost: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogOverlay className="bg-foreground/10 backdrop-blur-[12px]" />
      {!isGhost ? (
        <DialogTrigger asChild>
          <Button variant="secondary">
            <PlusIcon className="fill-current" />
            <span>აგენტის დამატება</span>
          </Button>
        </DialogTrigger>
      ) : null}
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
        {isOpen ? <AgentForm setIsOpen={setIsOpen} /> : null}
      </DialogContent>
    </Dialog>
  );
};
