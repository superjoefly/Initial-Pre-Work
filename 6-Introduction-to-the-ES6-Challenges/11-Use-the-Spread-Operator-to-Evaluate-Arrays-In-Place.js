
// Learned to use the Spread Operator to Evaluate Arrays In-Place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

let arr2;

(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();

console.log(arr2);
