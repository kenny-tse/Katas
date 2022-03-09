// You are given two sorted lists list1 and list2.
// Merge both lists together while keeping their order.

const merge = (list1, list2) => {

  let newArray = [];

  let list1Index = 0;
  let list2Index = 0;

  while (list1Index < list1.length || list2Index < list2.length) {

    if (list1[list1Index] < list2[list2Index] || list1[list1Index] && !list2[list2Index]) {
      newArray.push(list1[list1Index]);
      list1Index++;
    } else if (list1[list1Index] > list2[list2Index] || !list1[list1Index] && list2[list2Index]) {
      newArray.push(list2[list2Index]);
      list2Index++
    } else if (list1[list1Index] === list2[list2Index]) {
      newArray.push(list1[list1Index]);
      list1Index++;
      newArray.push(list2[list2Index]);
      list2Index++;
    }
  }
  return newArray;
}

console.log(merge([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 6]))
