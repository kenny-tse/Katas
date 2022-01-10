// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {

  if (str.trim() === "") {
    return false;
  }

  let sentenceAray = str.split(" ");

  let noSpaceArray = sentenceAray.filter((element) => {
    return element !== " ";
  });

  let capitalizedArray = noSpaceArray.map((element) => {

    let firstLetter = "";

    if (element[0]) {
      firstLetter = element[0].toUpperCase();
    }

    return firstLetter + element.slice(1, element.length)
  });

  if (capitalizedArray.join("").length >= 140) {
    return false;
  }

  return "#" + capitalizedArray.join("");
}

console.log(generateHashtag("Hello there thanks for   trying my Kata"));
console.log(generateHashtag("    Hello     World   "));
console.log(generateHashtag("  "));