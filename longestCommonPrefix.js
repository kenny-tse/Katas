// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.


/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

  let stringPrefix = "";

  for (const letter of strs[0]) {

    stringPrefix += letter;

    for (const word of strs) {

      if (word.substring(0, stringPrefix.length) !== stringPrefix) {
        // let tempArray = stringPrefix.split("");
        // tempArray.pop();
        // return tempArray.join("");

        return stringPrefix.slice(0, stringPrefix.length - 1)

      }
    }
  }
  return stringPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));