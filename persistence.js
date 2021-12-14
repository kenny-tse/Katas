// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {

  let counter = 0;
  let multipliedHolder = 1;

  if (num < 10) {
    return counter;
  }

  let numberArrayHolder = num.toString().split("");
  for (const number of numberArrayHolder) {
    multipliedHolder = multipliedHolder * number;
  }

  counter++;

  while (multipliedHolder >= 10) {

    numberArrayHolder = multipliedHolder.toString().split("");
    multipliedHolder = 1;
    for (const number of numberArrayHolder) {
      multipliedHolder = multipliedHolder * number;
    }
    counter++;
  }

  return counter;
}

console.log(persistence(999)); // should be 4
console.log(persistence(39)); // should be 3
console.log(persistence(4)); // should be 0