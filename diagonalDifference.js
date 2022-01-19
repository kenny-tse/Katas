// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {

  let firstNumber = 0;
  let secondNumber = 0;

  for (let i = 0; i < arr.length; i++) {
    firstNumber += arr[i][i];
  }

  for (let i = 0; i < arr.length; i++) {
    secondNumber += arr[i][arr.length - 1 - i];
  }

  return Math.abs(firstNumber - secondNumber);
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]))
