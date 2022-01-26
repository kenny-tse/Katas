// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

  let arrayOfWords = s.trim().split(" ");

  return arrayOfWords[arrayOfWords.length - 1].length;

};

console.log(lengthOfLastWord("here is an example string")); // 6