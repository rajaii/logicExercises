//Medium:

//o(n) time o(n) space:
function maxSubsetSumNoAdjacent(array) {
  if (array.length < 3 && array.length > 0) {
    return Math.max(...array);
  }

  const maxSums = [array[0], Math.max(array[0], array[1])];

  for (let i = 2; i < array.length; i++) {
    maxSums.push(Math.max(array[i] + maxSums[i - 2], maxSums[i - 1]));
  }

  return array.length ? maxSums[maxSums.length - 1] : 0;
}

//o(n) time o(1) space:
function maxSubsetSumNoAdjacent(array) {
  if (array.length < 3 && array.length > 0) {
    return Math.max(...array);
  }

  const maxSums = [array[0], Math.max(array[0], array[1])];
  let first = array[0];
  let second = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    if (array[i] + first > second) {
      const temp = second;
      second = array[i] + first;
      first = temp;
    } else {
      first = second;
    }
  }

  return array.length ? second : 0;
}
