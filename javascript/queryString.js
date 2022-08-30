// from leetcode medium: https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n

var queryString = function(s, n) {
  //loop and run check on all bin reps
  for (let i = 1; i < n + 1; i++) {
      const cur = i.toString(2);
      if (!s.includes(cur)) {
          return false;
      }
  }
  
  return true;
};

//PSEUDO:
//loop from 1 to n
//cur = i.toString(2);
//if (!s.includes(cur)) {
//return false;
//}

//return true;