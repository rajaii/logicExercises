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

//refactor after reading hints to have one pass:
//sln 1:
function isMonotonic(array) {
  let increasing = false;
  let done = false;
  

  for (let i = 1; i < array.length; i++) {
    if (!done && array[i] !== array[i-1]) {
      if ( array[i] > array[i-1]) {
        increasing = true;
        done = true;
        continue;
      } else {
        done = true;
        continue;
      }
    }

    if (done && increasing && array[i] < array[i-1]) {
      return false;
    } else if (done && !increasing && array[i] > array[i-1]) {
      return false;
    }
  }

  return true;
}

//sln 2:
function isMonotonic(array) {
  let increasing = false;
  if (array[array.length - 1] > array[0]) {
    increasing = true;
  }

  for (let i = 1; i < array.length; i++) {
    if (increasing && array[i] < array[i-1]) {
      return false;
    } else if (!increasing && array[i] > array[i-1]) {
      return false;
    }
  }

  return true;
}

//practice classes and recursion

function isMonotonic(array) {
  class Solution {
    constructor () {
      this.array = array;
    }

    determineMonotonicityHelper (i, increasing) {
      if (i === this.array.length) {
        return true;
      }
      
      if (increasing && this.array[i] < this.array[i - 1]) {
        return false;
      }

      if (!increasing && this.array[i] > this.array[i - 1]) {
        return false;
      }

      i += 1;
      return this.determineMonotonicityHelper(i, increasing);

      
    } 

    determineMonotonicity () {
      let increasing;
      if (this.array[this.array.length - 1] > this.array[0]) {
        increasing = true;
      }

      let i = 0;
      
      return this.determineMonotonicityHelper(i, increasing);
    }
  }

  return new Solution().determineMonotonicity();
}

//practice recursion only:

function isMonotonic(array) {

  function determineMonotonicityHelper (i, increasing) {
    if (i === array.length) {
      return true;
    }
    
    if (increasing && array[i] < array[i - 1]) {
      return false;
    }

    if (!increasing && array[i] > array[i - 1]) {
      return false;
    }

    i += 1;
    return determineMonotonicityHelper(i, increasing);

    
  } 

  function determineMonotonicity () {
    let increasing;
    if (array[array.length - 1] > array[0]) {
      increasing = true;
    }

    let i = 0;
    
    return determineMonotonicityHelper(i, increasing);
  }

  return determineMonotonicity();
}
