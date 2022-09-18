//This project uses functions, helper functions, math interpolation
//It sums up user logged sleep hours. 
//Compares it to an ideal value, and returns an answer.

const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 8;
      break;
    case "thrusday":
      return 7;
      break;
    case "friday":
      return 8;
      break;
  }
};

//function sums up 'logged' sleep hours
const getActualSleepHours = () => {
  return getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours('wednesday');
};

//function defines ideal sleep time
const getIdealSleepHours = () => {
  let idealHours = 6;
  return idealHours * 7;
};

//Func with helper funcs.
//Comparing two sleep time values, control flow, log.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("IDEAL SLEEP");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("MORE SLEEP THAN NEEDED");
  } else if (actualSleepHours < idealSleepHours) {
    console.log('LESS SLEEP THAN NEEDED! ' + (idealSleepHours - actualSleepHours) + ' hour(s) only...');
  }
};

calculateSleepDebt();


/*

NOT NEEDED. THOUGHT PROCESS. 

console.log(getSleepHours("friday"));

#first attempt code#

const getActualSleepHours = () => {
  
  console.log(getSleepHours('monday') + getSleepHours('tuesday'));
  
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday');  
};

//testing this shit
//getSleepHours('wednesday');
getActualSleepHours();

*/

