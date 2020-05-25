export const getHoursFromISOString = (data) => {
  const date = new Date(data);
  const hours = date.getUTCHours();
  return hours;
};
