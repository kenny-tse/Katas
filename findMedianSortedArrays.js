// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

const findMedianSortedArrays = (nums1, nums2) => {

  let newArray = [];

  let indexNum1 = 0;
  let indexNum2 = 0;

  while (indexNum1 < nums1.length || indexNum2 < nums2.length) {

    if (!nums1[indexNum1] && !nums2[indexNum2]) {
      return newArray;
    } else if (!nums1[indexNum1] && nums2[indexNum2]) {
      newArray.push(nums2[indexNum2]);
      indexNum2++;
    } else if (!nums2[indexNum2] && nums1[indexNum1]) {
      newArray.push(nums1[indexNum1]);
      indexNum1++;
    } else if (nums1[indexNum1] < nums2[indexNum2]) {
      newArray.push(nums1[indexNum1]);
      indexNum1++;
    } else if (nums1[indexNum1] > nums2[indexNum2]) {
      newArray.push(nums2[indexNum2]);
      indexNum2++;
    } else if (nums1[indexNum1] === nums2[indexNum2]) {
      newArray.push(nums1[indexNum1]);
      newArray.push(nums2[indexNum2]);
      indexNum1++;
      indexNum2++;
    }

    console.log(newArray)
  }

  return newArray;

}



// var findMedianSortedArrays = function (nums1, nums2) {

//   let arrayToMedian = [];
//   let index1 = 0;
//   let index2 = 0;

//   while (index1 < nums1.length || index2 < nums2.length) {

//     console.log("index1 is " + index1 + " and index2 is " + index2)

//     if (!nums1[index1]) {
//       arrayToMedian.push(nums2[index2]);
//       index2++;
//     } else if (!nums2[index2]) {
//       arrayToMedian.push(nums1[index1]);
//       index1++;
//     } else if (nums1[index1] < nums2[index2]) {
//       arrayToMedian.push(nums1[index1]);
//       index1++;
//     } else if (nums2[index2] < nums1[index1]) {
//       arrayToMedian.push(nums2[index2]);
//       index2++;
//     } else if (nums1[index1] === nums2[index2]) {
//       arrayToMedian.push(nums1[index1]);
//       arrayToMedian.push(nums2[index2]);
//       index1++;
//       index2++;
//     }
//   }

//   console.log(arrayToMedian)

//   if (arrayToMedian.length % 2 === 0) {
//     let firstNumber = arrayToMedian[(arrayToMedian.length / 2) - 1];
//     let secondNumber = arrayToMedian[(arrayToMedian.length / 2)];

//     return ((firstNumber + secondNumber) / 2);
//   }

//   return Math.floor((arrayToMedian.length / 2) + 1);

// };

console.log(findMedianSortedArrays([1, 2, 3], [2, 2, 4]));

