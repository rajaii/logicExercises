//  from leetcode easy: https://leetcode.com/problems/koko-eating-bananas

var minEatingSpeed = function(p, h) {
  if (p.length > 1 && p.every(pi => pi === p[0]) && h <= p[0]) {
      return p[0];
  }
  if (p.length === 1) {
      if (h < p[0]) {
          return Math.ceil(p[0] / h);
      }
  }
  //. find min
  let min = 1;

  //loop checking if min is valid and iterating if not
  let i = 0;
  let times = 0;
  while (i < p.length) {   

      if (min > p[i]) {
          times += 1;
        
      } else if (min < p[i]) {
          times += Math.ceil(p[i] / min);
          
      } else if (min === p[i]) {
          times += 1;
          
      }


      if (times <= h && i === p.length - 1) {
          return min;
      }

      if (times >= h && i <= p.length - 1) {
          min += 1
          i = 0;
          times = 0;
          continue;
      }  

      i += 1;


  }

};