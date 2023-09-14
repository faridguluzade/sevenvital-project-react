export function formatDate(inputDate) {
  // Parse the input date string
  const parts = inputDate.split("-");
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);

  // Define an array of month names
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

  // Format the date into the desired format
  const formattedDate = `${monthNames[month - 1]} ${day}, ${year}`;

  return formattedDate;
}
