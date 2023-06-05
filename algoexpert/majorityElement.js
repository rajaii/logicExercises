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