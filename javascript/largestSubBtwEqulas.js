//  from leetcode easy: https://leetcode.com/problems/largest-substring-between-two-equal-characters

var maxLengthBetweenEqualCharacters = function(s) {
  //  loop s to middle checking if s[i] is equal to s[s.length - 1- i] and then slice the inner if so and return     //. its len
  let max = 0;
  let equalsExist = false;
  for (let i = 0; i < s.length; i++) {
      for (let j = s.length - 1; j > i; j--) {
          if (s[i] === s[j]) {
              equalsExist = true;
          }
          if (s[i] === s[j] && s.slice(i+1, j).length > max) {
             max = s.slice(i+1, j).length;
          }
      }
  }
  
  return equalsExist ? max : -1;
};

//PSEUDO:

//loop s to middle
//
//if (s[s.length - 1 - i] === s[i]) {
//return s.slice(i+1, s.length - 1 - i).length;
//}

//out of loop
//return -1 