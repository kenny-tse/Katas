// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {

  let arrayOfWords = string.split(" ");
  let returnedStringArray = [];

  for (const word of arrayOfWords) {
    if (word.length >= 5) {

      let tempWord = "";
      for (let i = word.length - 1; i >= 0; i--) {
        tempWord = tempWord + word[i];
      }
      returnedStringArray.push(tempWord);

    } else {
      returnedStringArray.push(word);
    }
  }
  return returnedStringArray.join(" ");
}

function spinWordsUsingReverse(string) {

  let arrayOfWords = string.split(" ");
  let arrayToReturn = [];

  for (const word of arrayOfWords) {
    if (word.length >= 5) {
      let tempWordArray = word.split("");
      arrayToReturn.push(tempWordArray.reverse().join(""));
    } else {
      arrayToReturn.push(word);
    }
  }

  return arrayToReturn.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWordsUsingReverse("Hey fellow warriors"));