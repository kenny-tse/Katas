// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

const twoSum = (nums, target) => {

  let objectOfNumbers = {};

  for (const index in nums) {

    let numberInQuestion = nums[index];
    let result = target - numberInQuestion;

    if (objectOfNumbers[result] !== undefined) {
      return [index, objectOfNumbers[result]]
    };

    objectOfNumbers[`${numberInQuestion}`] = index;
  };

  return [];
}

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function (nums, target) {

//   let firstIndex = 0;
//   let secondIndex = 0;

//   for (const index in nums) {
//     let NumberOfInterest = nums[index];
//     firstIndex = index;

//     for (const index2 in nums) {
//       if (index2 !== index) {

//         if (Number(NumberOfInterest) + Number(nums[index2]) === target) {
//           secondIndex = index2;
//           return [firstIndex, secondIndex]
//         }
//       }
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15], 9));

// console.log(twoSum([3, 4, 3], 6));

console.log(twoSum([-3, 4, 3, 90], 0));

