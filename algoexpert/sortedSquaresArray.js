//first sln o (n log n) time o(1) space (not counting the returned array):

function sortedSquaredArray(array) {
  return array.map(n => n ** 2).sort((a,b) => a - b);
}

//Second solution using pointers to max and min, but actually o(n ** 2) as the .splices and min max resets are another full run worst case

function sortedSquaredArray(array) {
  //set the return array with length of array to append to
  const sortedSquares = [];
  sortedSquares.length = array.length;
  let min = array.indexOf(Math.min(...array));
  let max = array.indexOf(Math.max(...array));
  let i = sortedSquares.length - 1;

  while (i >= 0) {
    if (Math.abs(array[max]) > Math.abs(array[min])) {
      sortedSquares[i] = array[max] ** 2;
      array.splice(max, 1);
    } else {
      sortedSquares[i] = array[min] ** 2;
      array.splice(min, 1);
    }
    min = array.indexOf(Math.min(...array));
    max = array.indexOf(Math.max(...array));
    i -= 1;
  }

  return sortedSquares;
}

//fixed the o(n**2) problem
function sortedSquaredArray(array) {
  //set the return array with length of array to append to
  const sortedSquares = [];
  sortedSquares.length = array.length;
  let min = array.indexOf(Math.min(...array));
  let max = array.indexOf(Math.max(...array));
  let i = sortedSquares.length - 1;

  while (i >= 0) {
    if (Math.abs(array[max]) >= Math.abs(array[min])) {
      sortedSquares[i] = array[max] ** 2;
      max -= 1;
    } else {
      sortedSquares[i] = array[min] ** 2;
      min += 1;
    }
    i -= 1;
  }

  return sortedSquares;
}

//using o(n) but with class and recursion for practice

function sortedSquaredArray(array) {
  class Solution {
    constructor () {
      this.array = array;
    }

    sortedSquaresHelper (sorted, iteration, max, min) {
      if (iteration < 0) {
        return sorted;
      }
      
      if (Math.abs(this.array[max]) >= Math.abs(this.array[min])) {
        sorted[iteration] = this.array[max] ** 2;
        max -= 1;
      } else {
        sorted[iteration] = this.array[min] ** 2;
        min += 1;
      }

      iteration -= 1;

      return this.sortedSquaresHelper(sorted, iteration, max, min)
    }

    sortedSquares () {
      const sorted = [];
      sorted.length = this.array.length - 1;
      let max = this.array.indexOf(Math.max(...this.array));
      let min = this.array.indexOf(Math.min(...this.array));
      let iteration = this.array.length - 1;
      
      return this.sortedSquaresHelper(sorted, iteration, max, min);
    }
  }

  return new Solution().sortedSquares();
}