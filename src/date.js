const currentDate = new Date();

const months = [
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

const day = currentDate.getDate();
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

const formattedDate = `${months[month]} ${day}, ${year}`;
export { formattedDate };
