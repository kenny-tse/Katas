// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Lua: returns a Table;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 1
//   '    ***    ', 3
//   '   *****   ', 5
//   '  *******  ', 7
//   ' ********* ', 9
//   '***********'  11
// ]

function towerBuilder(nFloors) {

  let arrayToReturn = [];
  let numStars = 1;
  let maxStars = nFloors * 2 - 1;
  let space = "";

  for (let i = 0; i < nFloors; i++) {

    let tempString = "";
    let spaceMax = (maxStars - numStars) / 2;

    tempString = tempString + " ".repeat(spaceMax);
    tempString = tempString + "*".repeat(numStars);
    tempString = tempString + " ".repeat(spaceMax);

    arrayToReturn.push(tempString)
    numStars = numStars + 2;
  }
  return arrayToReturn;
}

console.log(towerBuilder(7))