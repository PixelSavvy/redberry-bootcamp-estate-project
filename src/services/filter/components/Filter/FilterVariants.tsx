import { type FC } from 'react';

import { Button } from '@/components';
import { useNumberFormatter } from '@/hooks';

type TFilterVariantsProps = {
  variants: number[];
  label: string;
  handleClick: (variant: string) => void;
  sign?: string;
};

export const FilterVariants: FC<TFilterVariantsProps> = ({
  variants,
  label,
  handleClick,
  sign,
}) => {
  const { formatNumber } = useNumberFormatter();

  return (
    <div className="flex flex-col items-start justify-center">
      <p className="mb-4 font-medium">{label}</p>
      <ul className="flex flex-col items-start justify-start space-y-2">
        {variants.map((variant) => (
          <Button
            key={variant}
            className="h-auto p-0 font-normal transition-colors hover:bg-transparent hover:text-foreground/60"
            variant="ghost"
            onClick={() => {
              handleClick(variant.toString());
            }}
          >
            {formatNumber(variant)} {sign}
          </Button>
        ))}
      </ul>
    </div>
  );
};
