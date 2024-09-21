export const inputErrorClass = (isError: boolean): string => {
  return isError ? 'border-primary' : '';
};

export const convertToDate = (date: string): string => {
  const locale = document.documentElement.lang || 'en-US';
  const parsedDate = new Date(date);

  return new Intl.DateTimeFormat(locale, {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  }).format(parsedDate);
};

export const convertFileToDataURL = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
