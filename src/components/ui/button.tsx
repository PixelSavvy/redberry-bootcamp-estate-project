/* eslint-disable react-refresh/only-export-components */
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1 whitespace-nowrap font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'h-12 px-4 py-[0.625rem] rounded-10 bg-primary text-primary-foreground hover:bg-primary-dark',
        primary_small:
          'bg-primary text-background hover:bg-primary-dark h-8 px-[0.875rem] py-2 rounded-8 text-sm',
        secondary:
          'h-12 px-4 py-[0.625rem] rounded-10 bg-background text-primary border border-primary hover:bg-primary hover:text-primary-foreground',
        outline:
          'h-[2.375rem] p-[0.625rem] text-14 rounded-8 border-[#676E76] border bg-background text-accent hover:bg-accent hover:text-accent-foreground',
        ghost:
          'h-[2.25rem] py-2 px-[0.875rem] rounded-6 bg-background hover:bg-muted',
        icon: 'h-6 w-6 rounded-full bg-background hover:bg-muted',
      },
    },

    defaultVariants: {
      variant: 'primary',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
