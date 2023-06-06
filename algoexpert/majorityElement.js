//MEDIUM:

//sln 1 o(n**2) runtime 0(1) space can do better on time
function majorityElement(array) {
    //set the var
    let max = 0;
    let majority;
  
    //double loop incrementing max when count is 
    for (let i = 0; i < array.length; i++) {
      let curCount = 1;
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          curCount += 1;     
        }
      }
      if (curCount > max) {
         max = curCount;
         majority = array[i];
      }
    }
    
    return majority || -1;
    
  }

  //sln 2 o(n) time o(1) space
  function majorityElement(array) {
    //set the count
    let count = 1;
    let cur = array[0];
    //loop resetting cur at every stop where count is 0
    for (let i = 1; i < array.length; i++) {
      if (array[i] === cur) {
        count += 1;
      } else {
        count -= 1;
        if (count === 0) {
          cur = array[i];
          count = 1;
        } 
      }
    }
  
    if (count >= 1) {
      return cur;
    }
    return -1;
  }