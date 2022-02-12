// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives and negatives also zeros_

// Repetition of numbers in the array/list could occur.

// The Maximum Gap is computed Regardless the sign.

// Input >> Output Examples
// maxGap ({13,10,5,2,9}) ==> return (4)
// Explanation:
// The Maximum Gap after sorting the array is 4 , The difference between 9 - 5 = 4 .

function maxGap(numbers) {

  let sortedArray = numbers.sort((element1, element2) => {

    if (element1 > element2) {
      return 1;
    } else if (element1 < element2) {
      return -1;
    } else {
      return 0;
    }
  });

  let bigestGap = 0;

  for (let i = 1; i < sortedArray.length; i++) {

    let numberToTest = Math.abs(sortedArray[i] - sortedArray[i - 1]);

    if (numberToTest > bigestGap) {
      bigestGap = numberToTest;
    }
  }
  return bigestGap;
}

console.log(maxGap([13, 10, 5, 2, 9])); // should be 4

console.log(maxGap([-86493, 48769, -30859, 159, 6, -93437, -42, -78897, 10, -919, -97, 1554, 5, -7104, -8704, 28478, -8855, -3110, -7, 6, 6293, -8161, -6686, 35309, 87])); // should be 48038

console.log(maxGap([25, 320, -3394])); // should be 3419