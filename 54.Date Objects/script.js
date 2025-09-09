// date objects = objects that contain values that represent dates and times
//                There date objects can be changed and formatted
// Date objects in JavaScript are built-in objects used to work with dates and times.
// They allow you to create, format, modify, and compare time values.

// Create a new Date object representing the current date and time.
const date = new Date(); // current date
console.log(date);
// Logs the current date and time in the system's local timezone.

// get----- methods can contain each parameter of time individually
// "get" methods extract specific parts of the date object.

const year = date.getFullYear();
console.log(year);
// getFullYear() → returns the 4-digit year (e.g., 2025).

const month = date.getMonth();
console.log(month);
// getMonth() → returns the month (0–11).
// Note: January = 0, February = 1, ... December = 11.

const day = date.getDate();
console.log(day);
// getDate() → returns the day of the month (1–31).

const hour = date.getHours();
console.log(hour);
// getHours() → returns the hour (0–23) in 24-hour format.

const minute = date.getMinutes();
console.log(minute);
// getMinutes() → returns the minutes (0–59).

const second = date.getSeconds();
console.log(second);
// getSeconds() → returns the seconds (0–59).

const ms = date.getMilliseconds();
console.log(ms);
// getMilliseconds() → returns the milliseconds (0–999).

// day oof the week
const dayOfWeek = date.getDay();
console.log(dayOfWeek);
// getDay() → returns the day of the week (0–6).
// Sunday = 0, Monday = 1, ... Saturday = 6.

// set------- methods can change one certain part of time to whatecer you like
// "set" methods allow you to modify parts of a date object.

const setDate = new Date();
// Creates a new date object with the current time.

setDate.setFullYear(2000);
console.log(setDate);
// setFullYear(2000) → changes the year to 2000.

setDate.setMonth(0);
console.log(setDate);
// setMonth(0) → sets the month to January (0 = January).

setDate.setDate(1);
console.log(setDate);
// setDate(1) → sets the day of the month to 1.

setDate.setHours(2);
console.log(setDate);
// setHours(2) → sets the hour to 02:00 (2 AM).

setDate.setMinutes(3);
console.log(setDate);
// setMinutes(3) → sets the minute to 03.

setDate.setSeconds(4);
console.log(setDate);
// setSeconds(4) → sets the seconds to 04.

setDate.setMilliseconds(5);
console.log(setDate);
// setMilliseconds(5) → sets the milliseconds to 5.

// Date(year, month, day, hour, minute, second, ms)
// You can create a new Date object with custom values.
const date1 = new Date(2026, 0, 1, 2, 3, 4, 5); // month 0 = the first month
console.log(date1);
// Creates a date: January 1, 2026, 02:03:04.005 (local time).
// Reminder: Month is zero-based, so 0 = January, 11 = December.

const date2 = new Date("2024-01-02T12:00:00Z"); // T means "Time"
console.log(date2);
// Creates a date from an ISO string (YYYY-MM-DDTHH:MM:SSZ).
// "Z" means UTC time (Coordinated Universal Time).

const day0 = new Date(0); // 0 means the first date your computer has
console.log(day0);
// new Date(0) → represents January 1, 1970, 00:00:00 UTC (the Unix epoch).

const dayN = new Date(99000000000000);
// the amount of milli second that has passed from the start date
console.log(dayN);
// Creates a date representing 99,000,000,000,000 milliseconds after Jan 1, 1970.

// comparing two dates
const firstDate = new Date("2023-12-31");
const secondDate = new Date("2024-01-01");

if (secondDate > firstDate) {
  console.log("HAPPY NEW YEAR!");
}
// Date objects can be compared using comparison operators (<, >, ==, etc.).
// Internally, they are compared by their numeric value (milliseconds since Jan 1, 1970).
