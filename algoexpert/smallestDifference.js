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

