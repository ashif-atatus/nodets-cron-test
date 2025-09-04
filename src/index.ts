import cron from "node-cron";
import atatus from "atatus-nodejs";
// Run every minute
console.log("Starting cron job");
const job1 =cron.schedule("*/3 * * * * *", () => {
  atatus.startBackgroundTransaction("CRON_TASK_ONE_MINUTE");
  console.log("Oru nimisham ku oru thadava naan run aagaren 😎");
  atatus.endTransaction();
});

// Example: Run every day at midnight
const job2 = cron.schedule("*/5 * * * * *", () => {
  atatus.startBackgroundTransaction("CRON_TASK_MIDNIGHT");
  console.log("Midnight task running 🌙");
  atatus.endTransaction();
});

job1.start();
job2.start();