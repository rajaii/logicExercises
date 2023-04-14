//MEDIUM:

//first sln: o(n) time o(1) space
function longestPeak(array) {
  // set the peaks array to find max
  let maxPeak = 0;

  // loop array and findpeak lengths
  for (let i = 1; i < array.length; i++) {
    if (array[i] <= array[i-1]) {
      continue;
    }
    let looped = false;
    let peak = 1;
    
    while (array[i] > array[i - 1]) {
      looped = true;
      peak += 1;
      i += 1;
      continue;
    }
    
    if (array[i] === array[i - 1]) {
      continue;
    }

    if (i === array.length) {
      return maxPeak;
    }
    
    while (looped && array[i] < array[i - 1]) {
      peak += 1; 
      i += 1;
      continue;
    }
    
    if (peak > maxPeak) {
      maxPeak = peak;
      i -= 1;
    }
  }

  return maxPeak;
}