var monthsNames = [
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

export function getFullDate(date) {
  var year = date.getFullYear();
  var month = monthsNames[date.getMonth()];
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return `${month} ${day}, ${year}, ${String(hours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}`;
}

export function getCalendarDate(date) {
  var year = date.getFullYear();
  var month = monthsNames[date.getMonth()];
  var day = date.getDate();
  return `${month} ${day} ${year}`;
}
