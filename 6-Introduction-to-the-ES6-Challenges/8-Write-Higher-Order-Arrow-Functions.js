
// Learned how to write Higher Order Arrow Functions

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const posIntegers = arr.filter((num) => num > 0 && Number.isInteger(num));

  const squaredIntegers = posIntegers.map((num) => num * num);

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
