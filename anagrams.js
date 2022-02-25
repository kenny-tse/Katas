// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


function anagrams(word, words) {

  let objectOfLetters = {};

  for (const letter of word) {
    if (!objectOfLetters[letter]) {
      objectOfLetters[letter] = 1;
    } else {
      objectOfLetters[letter] += 1;
    }
  }

  let arrayToReturn = [];

  for (const word of words) {

    let objectOfLettersToCompare = {};

    for (const letter of word) {
      if (!objectOfLettersToCompare[letter]) {
        objectOfLettersToCompare[letter] = 1;
      } else {
        objectOfLettersToCompare[letter] += 1;
      }
    }

    let keys = Object.keys(objectOfLettersToCompare);
    let add = true;

    for (const key of keys) {
      if (objectOfLettersToCompare[key] !== objectOfLetters[key]) {
        add = false;
      }
    }

    if (add === true) {
      arrayToReturn.push(word);
    }

  }

  return arrayToReturn;
}


// function anagrams(word, words) {


//   let objectOfLetters = {};

//   for (const letter of word) {
//     if (!objectOfLetters[letter]) {
//       objectOfLetters[letter] = 1;
//     } else if (objectOfLetters[letter]) {
//       objectOfLetters[letter] += 1;
//     }
//   }

//   let arrayToReturn = [];

//   for (const singleWord of words) {

//     let objectOfLettersCompare = {};

//     for (const letter of singleWord) {
//       if (!objectOfLettersCompare[letter]) {
//         objectOfLettersCompare[letter] = 1;
//       } else if (objectOfLettersCompare[letter]) {
//         objectOfLettersCompare[letter] += 1;
//       }
//     }

//     let add = true;

//     for (const key of Object.keys(objectOfLettersCompare)) {
//       if (objectOfLettersCompare[key] !== objectOfLetters[key]) {
//         add = false;
//       }
//     }

//     if (add === true) {
//       arrayToReturn.push(singleWord);
//     }
//   }

//   return arrayToReturn;
// }

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); //['carer', 'racer']