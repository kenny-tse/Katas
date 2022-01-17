// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

function matchingStrings(strings, queries) {

  let storage = {};

  for (const query of queries) {

    if (!storage[query]) {
      for (const string of strings) {
        if (query === string) {
          if (!storage[string]) {
            storage[string] = 1;
          } else {
            storage[string] += 1;
          }
        }
      }
    }
  }

  let arrayToReturn = [];

  for (const query of queries) {
    if (storage[query]) {
      arrayToReturn.push(storage[query])
    }

    if (!storage[query]) {
      arrayToReturn.push(0)

    }
  }

  return arrayToReturn;

}

console.log(matchingStrings(["4", "aba", "baba", "aba", "xzxb", "3"], ["aba", "xzxb", "ab"]));

console.log(matchingStrings(["3", "def", "de", "fgh", "3"], ["de", "lmn", "fgh"]));


console.log(matchingStrings(["ab", "ab", "abc"], ["ab", "ab"]));
