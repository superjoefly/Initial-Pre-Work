
// Learned to use Destructuring Assignment to Assign Variables from Objects

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  // Get the field of 'tomorrow' and copy it into 'tempOfTomorrow':
  const {tomorrow : tempOfTomorrow} = AVG_TEMPERATURES;

  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
