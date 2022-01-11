// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]

function topThreeWords(text) {

  if (text.trim() === "") {
    return [];
  }

  let objectWordCount = {};
  let letterArray = "abcdefghijklmnopqrstuvwxyz'".split("");
  let wordToAdd = "";

  let first = "";
  let second = "";
  let third = "";

  let firstCount = "";
  let secondCount = "";
  let thirdCount = "";

  for (const letter of text) {

    let lowerCaseLetter = letter.toLowerCase();

    if (letterArray.includes(lowerCaseLetter)) {
      wordToAdd += lowerCaseLetter;
    }

    if (!letterArray.includes(lowerCaseLetter) && wordToAdd !== "") {

      if (objectWordCount[wordToAdd]) {
        objectWordCount[wordToAdd] += 1;

        if (first === "" || objectWordCount[wordToAdd] > objectWordCount[first]) {
          first = wordToAdd;
        }

        if (objectWordCount[wordToAdd] <= objectWordCount[first]) {
          third = second;
          second = wordToAdd;
        }

      }
      if (!objectWordCount[wordToAdd]) {
        objectWordCount[wordToAdd] = 1;
      }

      wordToAdd = "";
    }
  }

  console.log(objectWordCount)
  let arrayToReturn = [];
  arrayToReturn.push(first);
  arrayToReturn.push(second);
  arrayToReturn.push(third);

  return arrayToReturn;
}

console.log(topThreeWords("In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance - rack, an old buckler, a lean hack, and a greyhound for coursing.An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three - quarters of his income."));