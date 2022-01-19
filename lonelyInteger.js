// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {

  let objectCount = {};

  for (const number of a) {

    if (objectCount[number]) {
      objectCount[number] += 1;
    }
    if (!objectCount[number]) {
      objectCount[number] = 1;
    }
  }

  let keys = Object.keys(objectCount);

  for (const key of keys) {
    if (objectCount[key] === 1) {
      return key;
    }
  }
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));