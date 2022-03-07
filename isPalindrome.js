// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// Constraints:

// -231 <= x <= 231 - 1

const isPalindrome = (x) => {

    let stringToEval = x.toString();

    // for (let i = 0; i < stringToEval.length; i++) {
    //     if (stringToEval[i] !== stringToEval[stringToEval.length - 1 - i]) {
    //         return false;
    //     }
    // }
    // return true;

    let reversedString = stringToEval.split("").reverse().join("");

    if (stringToEval !== reversedString) {
        return false;
    }

    return true;

}

module.exports = isPalindrome;

// var isPalindrome = function (x) {

//     let stringToCount = x.toString();

//     if (x < 0) {
//         return false;
//     }

//     for (let i = 0; i < stringToCount.length; i++) {

//         if (stringToCount[i] !== stringToCount[stringToCount.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };