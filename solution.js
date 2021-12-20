// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {

  let arrayToStore = [];
  let wordToAdd = "";

  for (const letter of string) {
    if (letter.toUpperCase() === letter) {
      arrayToStore.push(wordToAdd);
      wordToAdd = "";
    }

    wordToAdd = wordToAdd + letter;
  }

  arrayToStore.push(wordToAdd);
  return arrayToStore.join(" ");
}

console.log(solution("camelCasing"));
