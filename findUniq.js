// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

const findUniq = function (arr) {

  let arrayUnique = [... new Set(arr)];
  let firstNum = 0;
  let secondNum = 0;

  for (let i = 0; i < 3; i++) {
    if (arr[i] === arrayUnique[0]) {
      firstNum++;
    }
    if (arr[i] === arrayUnique[1]) {
      secondNum++;
    }
  }

  if (firstNum < secondNum) {
    return arrayUnique[0];
  }
  return arrayUnique[1];
}

module.exports = findUniq;