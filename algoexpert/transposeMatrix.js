//EASY

//o(n * m) === o(n) runtime where n is the elements in each matrix level o(n * m) space
function transposeMatrix(matrix) {
  //set the transposed
  const transposed = [];

  //loop adding
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j === 0) {
        transposed.push([matrix[j][i]]);
      } else {
        transposed[i].push(matrix[j][i]);
      }
    }
  }

  return transposed;
}

//same time/space but different approach
function transposeMatrix(matrix) {
  //set the transposed
  const transposed = [];

  for (let i = 0; i < matrix[0].length; i++) {
    let newRow = [];
    for (let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i]);
    }
    transposed.push(newRow);
  }

  return transposed;
}
