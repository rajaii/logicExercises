//  from leetcode easy: https://leetcode.com/problems/find-pivot-index

var pivotIndex = function(n) {
  //edge case
  if (n.length === 1) {
      return 0;
  }
  
  //  set the memory needed and reversed
  const reversed = [...n].reverse();
  
  //  loop and check
  for (let i = 0; i < n.length; i++) {
      if (i === 0 && n.slice(i+1).reduce((a,c) => a+c, 0) === 0) {
          return i;
      } else if (i === n.length - 1 && reversed.slice(1).reduce((a,c) => a+c, 0) === 0) {
          return i;
      } 
      
      if (n.slice(i+1).reduce((a,c) => a+c, 0) === n.slice(0,i).reduce((a,c) => a+c, 0)) {
          return i;
      }
  }
    
  return -1;   
};

//refactor after study

var pivotIndex = function(n) {
  //edge case
  let sumLeft = 0;
  const sum = n.reduce((a,c) => a+c, 0);
  for (let i = 0; i < n.length; i++) {
      sumLeft += n[i];
      if (sumLeft === (sum - sumLeft + n[i])) {
          return i;
      }
  }
  return -1;   
};