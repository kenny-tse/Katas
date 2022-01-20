// There are two n-element arrays of integers, A and B. Permute them into some A' and B' such that the relation A'[i] + B'[i] >. k holds for 
// all i where 0 <= i < n. There will be  queries consisting of , , and . For each query, return YES if some permutation ,  satisfying the relation exists.
// Otherwise, return NO.

/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {

  let ASorted = A.sort((element1, element2) => {

    if (element1 > element2) {
      return 1;
    } else if (element1 < element2) {
      return -1;
    } else {
      return 0;
    }
  });

  let Bsorted = B.sort((element1, element2) => {
    if (element1 < element2) {
      return 1;
    } else if (element1 > element2) {
      return -1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < A.length; i++) {
    if (ASorted[i] + Bsorted[i] < k) {
      return "NO";
    }
  }

  return "YES";
}

console.log(twoArrays(1, [0, 1], [0, 2]));