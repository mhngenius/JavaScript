// -----------------------------
// Digital Clock Program
// -----------------------------

// This function updates the clock display every second
function updateClock() {

  // Create a new Date object to get the current time
  const now = new Date();

  // Extract hours, minutes, and seconds from the Date object
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Determine whether it is AM or PM
  const meridiem = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // If hour is 0, display as 12
  hours = hours.toString().padStart(2, '0');

  // Combine all parts into a single formatted string
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

  // Display the time string inside an HTML element with id="clock"
  document.getElementById("clock").textContent = timeString;
}

// Call the function once immediately to display the clock without delay
updateClock();

// Then call it every 1000 milliseconds (1 second) to keep updating
setInterval(updateClock, 1000);
