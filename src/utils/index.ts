export const formatDate = (dateValue: Date) => {
  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    weekday: "long",
    year: "numeric",
    day: "2-digit",
  }).format(dateValue);
  return formattedDate;
};
