//EASY:

//o(n) time o(n) space
function findThreeLargestNumbers(array) {
  //make object of the form {array[i]: count}
  const counts = {};
  for (let i = 0; i < array.length; i++) {
    counts[array[i]] = counts[array[i]] + 1 || 1;
  }

  //make a ret array and loop finding the three largest pushing in their count times
  const sortedLgst = [];
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  for (let i = 0; i < counts[max]; i++) {
    if (sortedLgst.length < 3) {
      sortedLgst.push(max);
    } else {
      return sortedLgst.reverse();
    }
  }

  let newMax = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < max && array[i] > newMax) {
      newMax = array[i];
    }
  }

  for (let i = 0; i < counts[newMax]; i++) {
    if (sortedLgst.length < 3) {
      sortedLgst.push(newMax);
    } else {
      return sortedLgst.reverse();
    }
  }

  max = newMax;
  newMax = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < max && array[i] > newMax) {
      newMax = array[i];
    }
  }

  for (let i = 0; i < counts[newMax]; i++) {
    if (sortedLgst.length < 3) {
      sortedLgst.push(newMax);
    } else {
      return sortedLgst.reverse();
    }
  }

  return sortedLgst.reverse();
}

//o(n) time o(1) space much cleaner
function findThreeLargestNumbers(array) {
  const threeLargest = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= threeLargest[2]) {
      threeLargest[0] = threeLargest[1];
      threeLargest[1] = threeLargest[2];
      threeLargest[2] = array[i];
    } else if (array[i] > threeLargest[1] && array[i] <= threeLargest[2]) {
      threeLargest[0] = threeLargest[1];
      threeLargest[1] = array[i];
    } else if (array[i] > threeLargest[0] && array[i] <= threeLargest[1]) {
      threeLargest[0] = array[i];
    }
  }

  return threeLargest;
}
