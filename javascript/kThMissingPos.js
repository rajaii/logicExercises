//  from leetcode easy: https://leetcode.com/problems/kth-missing-positive-number/

var findKthPositive = function(a, k) {
  //set the missing array to push into and populate it
  const missing = [];
  
  for (let i = 1; i < a[a.length-1]; i++) {
      if (!a.includes(i)) {
          missing.push(i);
      }
  }
  
  if (missing.length >= k) {
      return missing[k - 1];
  }
  
  let amtMissing = k - missing.length;
  return a[a.length - 1] + amtMissing;
  
};

//PSEUDO:

//set missing = [];
//loop to a[a.length -1]
//if (!a.includes(i)) {
//missing.push(i)
//}

//return missing[k-1]