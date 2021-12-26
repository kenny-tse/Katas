// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function (s) {

  let arrayOfUniques = [];
  let counter1 = 0;
  let counter2 = 0;
  let returnValue = 0;

  if (s.length === 1) {
    return 1;
  }

  for (const value of s) {

    if (returnValue < arrayOfUniques.length) {
      returnValue = arrayOfUniques.length;
    }

    if (!arrayOfUniques.includes(value)) {
      arrayOfUniques.push(value);
      counter2++;
    } else if (arrayOfUniques.includes(value)) {
      if (counter1 < counter2) {
        counter1 = counter2;
        arrayOfUniques = [value];
        counter2 = 0;
      }
    }
  }

  return returnValue;
};


console.log(lengthOfLongestSubstring("  "));