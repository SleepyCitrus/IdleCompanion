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

// Oct 30, 2024, 00:00
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

// Oct 24
export function getCalendarDate(date) {
  var month = monthsNames[date.getMonth()];
  var day = date.getDate();
  return `${month.substring(0, 3)} ${day}`;
}

/**
 * Either "Oct 30, 2024" or
 *
 * Oct 30
 * 2024
 *
 * @param {*} date
 * @param {*} yearNewLine
 * @returns
 */
export function getCalendarDateWithYear(date, yearNewLine = false) {
  var year = date.getFullYear();
  var month = monthsNames[date.getMonth()];
  var day = date.getDate();
  if (yearNewLine) {
    return `${month} ${day}\n${year}`;
  }
  return `${month} ${day}, ${year}`;
}
