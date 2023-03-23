//First hard done ever!!! Had to view hints and some of video not for code or flow but for theory and limits behind it; but still o(n) time o(1) space

function subarraySort(array) {
  let sorted = false;
  //loop forwards to see where it drops initially
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      break;
    }
    if (i === array.length - 1) {
      sorted = true;
    }
  }

  if (sorted) {
    return [-1, -1];
  }

  let smallest = Infinity;
  let largest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      if (array[i] < smallest) {
        smallest = array[i];
      }

      if (array[i - 1] > largest) {
        largest = array[i -  1];
      }
    }
  }

  let indexOne;
  //loop forwards again to see where array value is <= smallest and set to indexOne
  for (let i = 0; i < array.length; i++) {
    if (array[i] > smallest) {
      indexOne = i;
      break;
    }

    if (array[i] === smallest) {
      indexOne = i + 1;
      break;
    }
  }

  let indexTwo;
  //loop backwards and see where array value is >= largest and set to indexTwo
  for (let i = array.length - 1; i > -1; i--) {
    if (array[i] <= largest) {
      indexTwo = i;
      break;
    }
  }

  return [indexOne, indexTwo]
}



