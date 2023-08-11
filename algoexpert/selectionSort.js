//EASY:

//o(n^2)  time o(1) space

function selectionSort(array) {
  //set cur to 0 and unsorted to whole list
  let cur = 0;

  //loop array selecting min and replacing with cur
  while (cur < array.length) {
    let min = Infinity;
    let mIndex;
    for (let i = cur; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        mIndex = i;
      }
    }

    const temp = array[cur];
    array[cur] = array[mIndex];
    array[mIndex] = temp;
    cur += 1;
  }

  return array;
}

//cleaner
function selectionSort(array) {
  //set cur to 0 and unsorted to whole list
  let cur = 0;

  //loop array selecting min and replacing with cur
  while (cur < array.length - 1) {
    let mIndex = cur;
    for (let i = cur; i < array.length; i++) {
      if (array[i] < array[mIndex]) {
        mIndex = i;
      }
    }

    const temp = array[cur];
    array[cur] = array[mIndex];
    array[mIndex] = temp;
    cur += 1;
  }

  return array;
}
