//Medium

//Brute force o(n ^ 2) time o(1) space my solution:

function smallestDifference(arrayOne, arrayTwo) {
  //set the minDifference var, and output array to push in to
  const output = [];
  let minDifference = Infinity;

  //double loop arrayOne on arrayTwo checking if abs(diff) < minDifference and push accordingly
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (Math.abs(arrayOne[i] - arrayTwo[j]) < minDifference) {
        minDifference = Math.abs(arrayOne[i] - arrayTwo[j]);
        output[0] = arrayOne[i];
        output[1] = arrayTwo[j];
      }
    }
  }
  return output;
};

//solution using pointers o(n) time o(1) space used the hints to get at it
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a,b) => a - b);
  arrayTwo.sort((a,b) => a - b);

  let pointerOne = 0;
  let pointerTwo = 0;
  let minDiff = Infinity;
  let solution = [];
  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    if (Math.abs(arrayOne[pointerOne] - arrayTwo[pointerTwo]) < minDiff) {
      minDiff = Math.abs(arrayOne[pointerOne] - arrayTwo[pointerTwo]);
      solution[0] = arrayOne[pointerOne];
      solution[1] = arrayTwo[pointerTwo];
    }

    if (arrayOne[pointerOne] < arrayTwo[pointerTwo] || pointerTwo === arrayTwo.length - 1) {
      pointerOne += 1;
      continue;
    }

    pointerTwo += 1;
  }
  return solution;
}

//Solution using recursion and class o(n) time and o(1)  space
function smallestDifference(arrayOne, arrayTwo) {
  class Solution {
    constructor (aOne, aTwo) {
      this.aOne = aOne.sort((a, b) => a - b);
      this.aTwo = aTwo.sort((a,b) => a - b);
    }

    helpFindSmallestDiff (arrOne, arrTwo, minDiff, output, i, j) {
      if (Math.abs(arrOne[i] - arrTwo[j]) < minDiff) {
        minDiff = Math.abs(arrOne[i] - arrTwo[j]);
        output[0] = arrOne[i];
        output[1] = arrTwo[j];
      } 
      
       if (i >= arrOne.length - 1 && j === arrTwo.length - 1) {
        return output;
      } 
      
      if (arrOne[i] < arrTwo[j] || j === arrTwo.length - 1) {
        i += 1;
      } else {
        j += 1;
      }

      return this.helpFindSmallestDiff(arrOne, arrTwo, minDiff, output, i, j);
    }

    findSmallestDiff () {
      return this.helpFindSmallestDiff(this.aOne, this.aTwo, Infinity, [], 0, 0);
    }
  }
  return new Solution(arrayOne, arrayTwo).findSmallestDiff();
}

