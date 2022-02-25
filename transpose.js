const transpose = function (matrix) {

  let container = [];
  const rows = matrix[0].length;
  const columns = matrix.length; // the number of blocks [   ]

  for (let i = 0; i < rows; i++) {
    container[i] = new Array(columns);
  }

  for (const xAxis in matrix) {
    for (const yAxis in matrix[xAxis]) {
      container[yAxis][xAxis] = matrix[xAxis][yAxis]
    }
  }

  return container;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write('\n')
  }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));
