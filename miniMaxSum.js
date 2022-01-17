// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {

  let smallestNumber = Number.MAX_SAFE_INTEGER;
  let largestNumber = 0;

  let total = 0;

  for (const numberIgnore in arr) {

    for (const number in arr) {
      if (number !== numberIgnore) {
        total += arr[number];

      }
    }

    if (total > largestNumber) {
      largestNumber = total;
    }

    if (total < smallestNumber) {
      smallestNumber = total;
    }

    total = 0;
  }

  console.log(smallestNumber + " " + largestNumber);

}

miniMaxSum([1, 3, 5, 7, 9]);
