// console.log("hello");

const cron = require("node-cron");

// For Every Second
cron.schedule("* * * * * *", () => {
  console.log("hello" + Math.random());
});

// For ranges
cron.schedule("38-40 6 * * * *", () => {
  console.log("hello" + Math.random());
});

// Allowed fields
//  # ┌────────────── second (optional) (0-59)
//  # │ ┌──────────── minute (0-59)
//  # │ │ ┌────────── hour (0-23)
//  # │ │ │ ┌──────── day of month (1-31)
//  # │ │ │ │ ┌────── month (1-12 or names)
//  # │ │ │ │ │ ┌──── day of week (0-7 or names , 0 and 7 are sunday)
//  # │ │ │ │ │ │
//  # │ │ │ │ │ │
//  # * * * * * *

// Schedule task Method
var task = cron.schedule(
  "* * * * *",
  () => {
    console.log("stopped task");
  },
  {
    scheduled: false,
    timezone: "Asia/Kolkata"
  }
);

task.start();


// For validate cron function

// var valid = cron.validate('59 * * * *');
// var invalid = cron.validate('60 * * * *');


