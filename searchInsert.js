// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

  let sliced = false;
  let arrayToEval = nums;
  let middleIndex = 0;

  while (sliced === false) {

    middleIndex = Math.trunc(arrayToEval.length / 2);

    if (arrayToEval[middleIndex] > target) {
      arrayToEval = arrayToEval.slice(0, middleIndex);
    }

    if (arrayToEval[middleIndex] < target) {
      sliced = true;
    }

    if (arrayToEval[middleIndex] === target) {
      return middleIndex;
    }

    if (arrayToEval.length === 0) {
      return 0;
    }
  }

  for (const index in arrayToEval) {
    if (arrayToEval[index] < target && arrayToEval[Number(index) + 1] > target) {
      return Number(index) + 1;
    }

    if (arrayToEval[index] === target) {
      return index;
    }
  }

  return arrayToEval.length;
};

console.log("Testing [1, 3, 5], 6: Should equal 3")
console.log(searchInsert([1, 3, 5], 6));

console.log("Testing [1, 3, 5], 4: Should equal 2")
console.log(searchInsert([1, 3, 5], 4));

console.log("Testing [1, 3, 5], 4: Should equal 2")
console.log(searchInsert([1, 3, 5], 5));