//https://leetcode.com/problems/repeated-substring-pattern/submissions/

var repeatedSubstringPattern = function(s) {
  //edge case
  if (s.length <= 1) {
      return false;
  }
  
  //loop and take all substrings
  let subs = [`${s[0]}`];
  
  for (let i = 1; i < s.length - 1; i++) {
      subs = [...subs, `${subs[subs.length - 1]}${s[i]}`]
  }
 
  //append all substrings together who can append to the length of s to that length
  let result = false;
  for (let i = 0; i < subs.length; i++) {
      let comp = "";
      if (s.length % subs[i].length === 0) {
          for (let j = 0; j < (s.length / subs[i].length); j++) {
              comp = `${comp}${subs[i]}`;    
          }
          if (comp === s) {
              result = true;
              break;
          }
      } 
  }
  
  return result;
};
