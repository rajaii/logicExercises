// from leetcode easy: https://leetcode.com/problems/find-the-middle-index-in-array

var findMiddleIndex = function(n) {
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
