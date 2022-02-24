// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.

// Example
// Input:
// List = [
//         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//        ]

// Output:
// 'Vatsan took his dog for a spin'

function sentence(list) {

  let numbers = {};

  for (const element of list) {
    let toPut = Object.entries(element)[0];
    numbers[toPut[0]] = toPut[1];
  }

  let sortedKeys = Object.keys(numbers).sort((element1, element2) => { return element1 - element2 });

  let stringToReturn = [];

  for (const key of sortedKeys) {
    stringToReturn.push(numbers[key])
  }

  return stringToReturn.join(" ");

}

console.log(sentence([
  { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
  { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
]));