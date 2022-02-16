// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

const isValidWalk = (walk) => {

  if (walk.length !== 10) {
    return false;
  }

  let objectOfDirections = {};

  for (const direction of walk) {

    if (!objectOfDirections[direction]) {
      objectOfDirections[direction] = 1;
    } else {
      objectOfDirections[direction] += 1;
    }
  }

  if (objectOfDirections["n"] !== objectOfDirections["s"]) {
    return false;
  }

  if (objectOfDirections["e"] !== objectOfDirections["w"]) {
    return false;
  }

  return true;
};


// function isValidWalk(walk) {

//   if (walk.length !== 10) {
//     return false;
//   }

//   let n = 0;
//   let e = 0;
//   let s = 0;
//   let w = 0;

//   for (const direction of walk) {
//     if (direction === "n") {
//       n++;
//     }

//     if (direction === "e") {
//       e++;
//     }

//     if (direction === "s") {
//       s++;
//     }

//     if (direction === "w") {
//       w++;
//     }
//   }

//   console.log("north", n)
//   console.log("east", e)
//   console.log("south", s)
//   console.log("west", w)

//   if (n !== s || e !== w) {
//     return false;
//   }

//   return true;
// }

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); // true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])); // false