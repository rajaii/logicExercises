//MEDIUM:

//Solution 1 o(n^2) / 3 === o(n^2) runtime o(1) space
//NOTE: took way too long as algo expert said they would have also numbers btw the order values, and I factored to sort those too, only to find out that they didn't test for those

function threeNumberSort(array, order) {
  //set the left and right
  let left = 0;
  let right = 1;

  //loop handling order[0]
  while (right < array.length) {
    if (array[left] === order[0]) {
      left += 1;
      right = left + 1;
      continue;
    }

    if (array[right] === order[0]) {
      const temp = array[right];
      array[right] = array[left];
      array[left] = temp;
      left += 1;
      right = left + 1;
      continue;
    }

    right += 1;
  }

  left = array.findIndex((e) => e !== order[0]);
  right = left + 1;

  while (right < array.length) {
    if (array[left] === order[1]) {
      left += 1;
      right = left + 1;
      continue;
    }

    if (array[right] === order[1]) {
      const temp = array[right];
      array[right] = array[left];
      array[left] = temp;
      left += 1;
      right = left + 1;
      continue;
    }

    right += 1;
    if (right === array.length) {
      left += 1;
      right = left + 1;
      break;
    }
  }

  return array;
}

//solution 2 o(n) time o(1) space
function threeNumberSort(array, order) {
  //tag counts
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  //increment counts accordingly
  for (let i = 0; i < array.length; i++) {
    if (array[i] === order[0]) {
      count1 += 1;
    } else if (array[i] === order[1]) {
      count2 += 1;
    } else {
      count3 += 1;
    }
  }

  //mutate array
  for (let i = 0; i < array.length; i++) {
    if (count1) {
      array[i] = order[0];
      count1 -= 1;
    } else if (!count1 && count2) {
      array[i] = order[1];
      count2 -= 1;
    } else if (!count1 && !count2 && count3) {
      array[i] = order[2];
      count3 -= 1;
    }
  }

  return array;
}

//sln 3 less passes still same complexity
function threeNumberSort(array, order) {
  //swap to front
  let left = 0;
  for (let right = 1; right < array.length; right++) {
    if (array[left] === order[0]) {
      left += 1;
      if (array[right] === order[0]) {
        const temp = array[right];
        array[right] = array[left];
        array[left] = temp;
        left += 1;
      }
    }
    if (array[right] === order[0]) {
      const temp = array[right];
      array[right] = array[left];
      array[left] = temp;
      left += 1;
    }
  }

  //swap to back
  let r = array.length - 1;
  for (let l = array.length - 2; l > -1; l--) {
    if (array[r] === order[2]) {
      r -= 1;
      if (array[l] === order[2] && array[r] !== order[2]) {
        const temp = array[l];
        array[l] = array[r];
        array[r] = temp;
        r -= 1;
      }
    }
    if (array[l] === order[2] && array[r] !== order[2]) {
      const temp = array[l];
      array[l] = array[r];
      array[r] = temp;
      r -= 1;
    }
  }

  return array;
}

//third sln same but using one run
function threeNumberSort(array, order) {
  let first = 0;
  let second = 0;
  let third = array.length - 1;

  while (second <= third) {
    if (array[second] === order[0]) {
      const temp = array[first];
      array[first] = array[second];
      array[second] = temp;
      first += 1;
      second += 1;
      continue;
    }

    if (array[second] === order[1]) {
      second += 1;
      continue;
    }

    if (array[second] === order[2]) {
      const temp = array[third];
      array[third] = array[second];
      array[second] = temp;
      third -= 1;
    }
  }

  return array;
}
