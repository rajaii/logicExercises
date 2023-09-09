//EASY

var islandPerimeter = function (grid) {
  //set count
  let count = 0;

  //loop tagging each grid[i][j] incrment accordingly
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        if (grid[i - 1] === undefined) {
          count += 1;
        }

        if (grid[i + 1] === undefined) {
          count += 1;
        }

        if (grid[i][j - 1] === undefined) {
          count += 1;
        }

        if (grid[i][j + 1] === undefined) {
          count += 1;
        }

        if (grid[i][j - 1] !== undefined && grid[i][j - 1] === 0) {
          count += 1;
        }

        if (grid[i][j + 1] !== undefined && grid[i][j + 1] === 0) {
          count += 1;
        }

        if (grid[i - 1] !== undefined && grid[i - 1][j] === 0) {
          count += 1;
        }

        if (grid[i + 1] !== undefined && grid[i + 1][j] === 0) {
          count += 1;
        }
      }
    }
  }

  return count;
};
