//EASY:

//o(log n) time o(1) space
function binarySearch(array, target) {
  //set the left, right and mid
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  //loop while left <= right checking for target
  while (left <= right) {
    if (target === array[mid]) {
      return mid;
    }
    if (target > array[mid]) {
      left = mid + 1;
    } else if (target < array[mid]) {
      right = mid - 1;
    }
    mid = Math.floor((left + right) / 2);
  }

  return -1;
}
