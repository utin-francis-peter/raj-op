export const formatDate = (dateStr) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dateObj = new Date(dateStr);
  const month = dateObj.getMonth();
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();

  return `${monthNames[month]} ${date}, ${year}`;
};
