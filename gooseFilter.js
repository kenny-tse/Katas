// filter out birds inside geese array
// function gooseFilter(birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

//   let returnArray = birds.filter((element) => {
//     return !geese.includes(element)
//   })

//   return returnArray;
// };

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return returnArray = birds.filter((element) => {
    if (!geese.includes(element)) {
      return element;
    }
  })

};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));