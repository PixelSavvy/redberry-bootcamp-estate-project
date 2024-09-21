import { useMemo } from 'react';

export const useNumberFormatter = (): {
  formatNumber: (value: number) => string;
} => {
  const locale = useMemo(() => {
    const htmlLang = document.documentElement.lang || 'en-US';
    return htmlLang;
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

  return { formatNumber };
};
