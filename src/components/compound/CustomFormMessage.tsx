import { type FC } from 'react';
import { type ControllerFieldState } from 'react-hook-form';

import { CheckedIcon, FormDescription } from '@/components/ui';
import { cn } from '@/lib';

type TCustomFormMessageProps = {
  fieldState: ControllerFieldState;
  message?: string;
};

export const CustomFormMessage: FC<TCustomFormMessageProps> = ({
  fieldState,
  message,
}) => {
  const isError = fieldState.error;
  const isDirty = fieldState.isDirty;
  // const isTouched = fieldState.isTouched;
  const isErrorMessage = fieldState.error?.message;

  const hasIcon = Boolean(message) || Boolean(isErrorMessage);

  return (
    <FormDescription
      className={cn(
        'flex items-center justify-start gap-2',
        isError ? 'text-primary' : 'text-foreground',
        isDirty && !isError ? 'text-success' : '',
      )}
    >
      {hasIcon ? <CheckedIcon className="stroke-current" /> : null}
      {isError ? <span>{isErrorMessage}</span> : <span>{message}</span>}
    </FormDescription>
  );
};
