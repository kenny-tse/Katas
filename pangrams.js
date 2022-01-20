// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.


function pangrams(s) {

  let includeArray = "abcdefghijklmnopqrstuvwxyz".split("");

  let iterateSentence = s.split(" ").join("");

  let noSpaceSentence = iterateSentence.toLowerCase().split("");

  for (const letter of includeArray) {

    if (!iterateSentence.includes(letter)) {
      return "not pangram";
    }
  }
  return "pangram";
}

console.log(pangrams("We promptly judged antique ivory buckles for the next prize"));


console.log(pangrams("We promptly judged antique ivory buckles for the prize"));