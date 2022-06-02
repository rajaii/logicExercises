//  from leetcode easy: https://leetcode.com/problems/number-of-ways-to-split-array

var waysToSplitArray = function(n) {
  //set the mem needed
  let counter = 0;
  const sum = n.reduce((a,c) => a + c, 0);
  let sumFirst = 0;
  
  //loop to n.length - 1
  for (let i = 0; i < n.length -1; i++) {
      sumFirst += n[i]
      if (sumFirst >= sum - sumFirst) {
          counter += 1;
      }
  }
  
  return counter;
};

//PSEUDO:

//let counter = 0;
//let sumFirst = 0;
//let sum = n.reduce((a,c) => a + c, 0);
//loop to n.length - 1
//sumFirst += n[i]
//if (sumFirst >= sum - sumFirst + n[i]) {
//counter += 1;
//}

//return counter