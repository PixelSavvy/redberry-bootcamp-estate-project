import { useMemo } from 'react';

interface NumberFormatterProps {
  formatNumber: (value: number) => string;
  locale: string;
}

export const useNumberFormatter = (): NumberFormatterProps => {
  const locale = useMemo(() => {
    const htmlLange = document.documentElement.lang || 'en-US';
    return htmlLange;
  }, []);

  const formatter = useMemo(() => {
    return new Intl.NumberFormat(locale, {
      style: 'decimal',

      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }, [locale]);

  const formatNumber = (value: number): string => {
    return formatter.format(value);
  };

  return { formatNumber, locale };
};
