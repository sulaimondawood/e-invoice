export const formatDate = (dateValue: Date) => {
  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    weekday: "long",
    year: "numeric",
    day: "2-digit",
  }).format(dateValue);
  return formattedDate;
};

export const formatCurrency = (data: {
  value: number;
  currency: "USD" | "NGN" | "EUR" | "CAD";
}) => {
  const currencyLocales: Record<string, string> = {
    USD: "en-US",
    NGN: "en-NG",
    EUR: "de-DE",
    CAD: "en-CA",
  };

  const formatedNumber = new Intl.NumberFormat(currencyLocales[data.currency], {
    currency: data.currency,
    style: "currency",
  }).format(data.value);

  return formatedNumber;
};
