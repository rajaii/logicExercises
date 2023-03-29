//MEDIUM

//first solution 0(n) runtime o(1 space)

function isMonotonic(array) {
  if (array.length === 1 || array.length === 0) {
    return true;
  }
  
  if (array.every(e => e === array[0])) {
    return true;
  }

  let increasing = false;
  let decreasing = false;

  if (array[array.length - 1] > array[0]) {
    increasing = true;
  } else {
    decreasing = true;
  }
  
  //loop so see if non descreasing
  if (increasing) {
    for (let i = 1; i < array.length; i++) {
      if (i === array.length - 1 && array[i] <= array[0]) {
        return false;
      }
  
      if (array[i] < array[i-1]) {
        return false;
      }
    }
  }
  

  //loop to see if non increasing
  if (decreasing) {
    for (let i = 0; i < array.length; i++) {
      if (i === array.length - 1 && array[i] >= array[0]) {
        return false;
      }
  
      if (array[i] > array[i - 1]) {
        return false;
      }
    }
  }

  return true
}