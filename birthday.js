// Two children, Lily and Ron, want to share a chocolate bar.Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {

  let numberOfTimes = 0;

  for (const index in s) {

    let number = 0;

    for (let i = 0; i < m; i++) {
      console.log("adding number ", s[Number(index) + i])
      number += s[Number(index) + i];
    }

    if (number === d) {
      numberOfTimes++;
    }
  }

  return numberOfTimes;
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2));

