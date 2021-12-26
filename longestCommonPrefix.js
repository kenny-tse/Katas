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
        let tempArray = stringPrefix.split("");
        tempArray.pop();
        return tempArray.join("");
      }
    }
  }
  return stringPrefix;
};

console.log(longestCommonPrefix(["flower", "flower", "flower"]));