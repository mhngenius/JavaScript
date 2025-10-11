// setTimeout() = function in JavaScript that allows you to schedule
//                the execution of a function after an amount of time (milliseconds)
//                Times are approximate (varies based on the workload of the JavaScript run time env.)

// 🎯 Example: Simulate a snack ordering system with delayed actions

console.log("🍿 Welcome to the Concession Stand!");

// function to simulate preparing an order
function prepareOrder(item, time) {
  console.log(`🧾 Order received: ${item}`);

  // use setTimeout to simulate cooking/preparing time
  setTimeout(() => {
    console.log(`✅ ${item} is ready after ${time / 1000} seconds!`);
  }, time);
}

// function to notify the customer after all orders are done
function notifyCustomer() {
  console.log("🔔 All orders are ready! Please pick them up at the counter.");
}

// placing multiple orders with different preparation times
prepareOrder("Popcorn", 2000);   // will be ready after 2 seconds
prepareOrder("Hotdog", 4000);    // will be ready after 4 seconds
prepareOrder("Soda", 1000);      // will be ready after 1 second

// notify the customer after 5 seconds (after all orders are done)
setTimeout(notifyCustomer, 5000);

// 🧠 Explanation:
// - setTimeout() schedules a function to run after a delay.
// - Each order uses setTimeout() to simulate different prep times.
// - notifyCustomer() runs last, after all individual items are ready.
