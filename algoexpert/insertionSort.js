//EASY:

//o(n^2) time o(1) mine
function insertionSort(array) {
  let sortedEnd = 0;
  let unsortedStart = 1;
  while (sortedEnd < array.length) {
    if (array[unsortedStart] > array[sortedEnd]) {
      sortedEnd += 1;
      unsortedStart += 1;
    } else {
      let comparisonI = sortedEnd;
      let curComparator = unsortedStart;
      while (array[curComparator] < array[comparisonI] && comparisonI >= 0) {
        const temp = array[curComparator];
        array[curComparator] = array[comparisonI];
        array[comparisonI] = temp;
        comparisonI -= 1;
        curComparator -= 1;
      }
      sortedEnd += 1;
      unsortedStart += 1;
    }
  }
  return array;
}

//same time/space algos version cleaner:
function insertionSort(array) {
  for (let unsortedI = 1; unsortedI < array.length; unsortedI++) {
    let cur = unsortedI;
    while (cur > 0 && array[cur] < array[cur - 1]) {
      const temp = array[cur];
      array[cur] = array[cur - 1];
      array[cur - 1] = temp;
      cur -= 1;
    }
  }
  return array;
}
