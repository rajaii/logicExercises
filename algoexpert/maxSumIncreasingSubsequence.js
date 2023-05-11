//HARD

//solution 1 o(n^2) time o(n) space 
function maxSumIncreasingSubsequence(array) {
  const sums = [];
  const sequences = []
  for (let i = 0; i < array.length; i++) {
    let sum = array[i];
    let index = null;
    for (let j = 0; j < i; j++) {
      if (array[j] < array[i] && array[i] + sums[j] > sum) {
        sum =  array[i] + sums[j];
        index = j;
      }
    }

    sums.push(sum);
    sequences.push(index);
  }
 
  const max = Math.max(...sums);
  const retArrTracker = [sums.indexOf(max)];
  for (let i = sums.indexOf(max); i >= 0; i--) {
    if (i === sums.indexOf(max) && sequences[i] !== null) {
      retArrTracker.push(sequences[i]);
      continue;
    }

    if (i === retArrTracker[retArrTracker.length - 1] && sequences[i] !== null) {
      retArrTracker.push(sequences[i]);
    }   
  }
  retArrTracker.reverse();
  const retArr = [];

  for (let i = 0; i < retArrTracker.length; i++) {
    retArr.push(array[retArrTracker[i]]);
  }
  
  return [max, retArr];
}