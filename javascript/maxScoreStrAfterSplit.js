//  from leetcode easy: https://leetcode.com/problems/maximum-score-after-splitting-a-string

var maxScore = function(s) {
  //set the counter
  let counter = 0;
  
  //loop s splitting and counting as you iterate
  for (let i = 0; i < s.length - 1; i++) {
      const l = s.slice(0,i+1);
      const r = s.slice(i+1);
      let count = 0;
      for (let i = 0; i < l.length; i++) {
          if (l[i] === "0") {
              count += 1;
          }
      }
      
      for (let i = 0; i < r.length; i++) {
          if (r[i] === "1") {
              count += 1;
          }
      }
      
      if (count > counter) {
          counter = count;
      }
      
  }
  
  return counter;
};
