//EASY:

//o(n^2) runtime, o(1) space
function bubbleSort(array) {
  let left = 0;
  let right = 1;
  let changed = false;
  while (left < array.length) {
    if (array[left] > array[right]) {
      changed = true;
      const temp = array[right];
      array[right] = array[left];
      array[left] = temp;
    }
    left += 1;
    right += 1;

    if (left === array.length - 1 && changed) {
      left = 0;
      right = 1;
      changed = false;
      continue;
    }

    if (left === array.length - 1 && !changed) {
      break;
    }
  }

  return array;
}
