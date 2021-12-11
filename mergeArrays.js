function mergeArrays(a, b) {

  let newArray = [];
  let length = 0;

  if (a.length > b.length) {
    length = b.length;
  } else if (a.length === b.length) {
    length = a.length;
  } else {
    length = a.length;
  }

  for (let i = 0; i < length; i++) {
    newArray.push(a[i]);
    newArray.push(b[i]);
  }

  if (a.length > b.length) {
    for (let i = b.length; i < a.length; i++) {
      newArray.push(a[i])
    }
  }

  if (a.length < b.length) {
    for (let i = a.length; i < b.length; i++) {
      newArray.push(b[i])
    }
  }

  return newArray;
}
// [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']));