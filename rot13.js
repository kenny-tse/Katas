// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {

  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let stringToReturn = "";

  for (const letter of message) {

    let originalLetterIndex = alphabet.indexOf(letter.toLowerCase());
    let newLetterIndex = alphabet.indexOf(letter.toLowerCase()) + 13;

    let isUpperCase = false;

    if (alphabet.includes(letter.toLowerCase())) {
      if (alphabet[originalLetterIndex].toUpperCase() === letter) {
        isUpperCase = true;
      }

      if (newLetterIndex - 26 >= 0) {
        if (isUpperCase === true) {
          stringToReturn += alphabet[newLetterIndex - 26].toUpperCase();
        } else {
          stringToReturn += alphabet[newLetterIndex - 26];
        }
      }

      if (newLetterIndex - 26 < 0) {
        if (isUpperCase === true) {
          stringToReturn += alphabet[newLetterIndex].toUpperCase();
        } else {
          stringToReturn += alphabet[newLetterIndex];
        }
      }
    }

    if (!alphabet.includes(letter.toLowerCase())) {
      stringToReturn += letter;
    }
  }

  return stringToReturn;
}

console.log(rot13("GRF&G"))

// grfg => test