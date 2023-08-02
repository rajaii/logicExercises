//MEDIUM

//o(n*m) time o(1)  space
function searchInSortedMatrix(matrix, target) {
  //set the starter and ret
  let ret = [-1, -1];
  let cur = [0, matrix[0].length - 1];

  //loop and check eliminating where appropriate
  while (cur[0] < matrix.length || cur[1] > 0) {
    if (matrix[cur[0]][cur[1]] > target) {
      cur[1] -= 1;
    } else if (matrix[cur[0]][cur[1]] < target) {
      cur[0] += 1;
    } else if (matrix[cur[0]][cur[1]] === target) {
      ret = cur;
      break;
    } else {
      break;
    }
  }

  return ret;
}
