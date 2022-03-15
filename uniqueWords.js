// const uniqueWords = (sentence) => {

//   let sentenceFormatted = sentence.toLowerCase().split(".").join("").split(",").join("");

//   console.log(sentenceFormatted)

//   let arrayToStore = [...new Set(sentenceFormatted.split(" "))];

//   return arrayToStore.length;

// }

const uniqueWords = (sentence) => {

  let arrayToStore = [];

  let wordsToIterate = sentence.toLowerCase().split(",").join("").split(".").join("").split(" ");

  for (const word of wordsToIterate) {
    if (!arrayToStore.includes(word)) {
      arrayToStore.push(word);
    }
  }

  return arrayToStore.length;
}

console.log(uniqueWords("hello World this is, the world."))