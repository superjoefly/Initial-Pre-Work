
// Learned to use Getters and Setters to Control Access to an Object

function makeClass() {
  "use strict";
  /* Alter code below this line */

  class Thermostat {
    constructor(temperature) {
      this.temperature = temperature;
    }

    // getter
    get temperature() {
      return this.temperature;
    }

    // setter
    set temperature(temp) {
      this.temperature = 5/9 * (temp - 32);
    }


  }

  /* Alter code above this line */
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
