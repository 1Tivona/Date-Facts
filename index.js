var moment = require('moment');
moment().format();

const chalk = require('chalk');

// console.log(chalk.blue('Hello world!'));
let today = moment().dayOfYear(Number);
console.log(`It is ${chalk.blue(today)}.`);

let howLong = moment().dayOfYear();
console.log(`It is the ${chalk.green(howLong)}th day the of year.`)

let seconds = moment().milliseconds();
console.log(`It is ${chalk.blue(seconds * 1000)} seconds into the day.`);


let dayLight = moment().isDST();
  if (dayLight == "true"){
console.log(`It ${chalk.green("is")} during Daylight Savings Time. `);
  } else{
  console.log(`It ${chalk.red("is not")} during Daylight Savings Time.`);
    }


let year = moment([2017]).isLeapYear();
  if (year == "true"){
console.log(`It ${chalk.green ("is")} a leap year. `);
  } else{
  console.log(`It ${chalk.red("is not")} a leap year.`)
    }
