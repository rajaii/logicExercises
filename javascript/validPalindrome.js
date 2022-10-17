//  from leetcode easy https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(str) {
  const isAlphaNumeric = str => /^[a-z0-9]+$/gi.test(str);
  if (str.length === 1 || str.length === 0 || str.split("").every(s => !isAlphaNumeric(s))) {
      return true;
  }
  
  
  let left = 0;
  let right = str.length - 1
  
  while (left <= right) {
      while (!isAlphaNumeric(str[left])) {
          left += 1;
      }
      
      while (!isAlphaNumeric(str[right])) {
          right -= 1;
      }
      
      if (str[left].toLowerCase() !== str[right].toLowerCase()) {
          return false;
      }
      
      left += 1;
      right -= 1;
  }
  
  return true;
};

//PSEUDO:
//set memory with alphanumeric chars (can use regex fn too)
//make s = ""
//loop str and concat the lower case of str[i] to s if in the set

//make s2
//loop s backwards and concat to s2

//if s1 === s2 return true

//else ret false