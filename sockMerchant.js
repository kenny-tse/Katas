// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {

  let objectPairs = {};

  for (const sock of ar) {

    if (objectPairs[sock]) {
      objectPairs[sock] += 1;
    }
    if (!objectPairs[sock]) {
      objectPairs[sock] = 1;
    }
  }

  let keys = Object.keys(objectPairs);

  let total = 0;

  for (const key of keys) {
    total += Math.trunc(objectPairs[key] / 2);
  }

  return total;
}

console.log(sockMerchant(5, [1, 2, 1, 2, 1, 3, 2]));
