//  from leetcode medium: https://leetcode.com/problems/longest-repeating-character-replacement

var characterReplacement = function(s, k) {
  //edge case where k === amount of changes needed on 2 chars to make s.length the ret val
  let amt = 0;
  let o = {}
  for (let i = 0; i < s.length; i++) {
      o[s[i]] = o[s[i]] + 1 || 1;
  }
  
  for (let key in o) {
      if (o[key] === k && Object.keys(o).length === 2) {
          return s.length;
      }
  }
  
  let max = 0;
  //run forwards
  for (let i = 0; i < s.length; i++) {
      let numTries = k;
      let len = 1;
      for (let j = i+1; j < s.length; j++) {
          if (numTries === 0 && s[j] !== s[i]) {
              break;
          } 
          
          if (s[j] !== s[i]){
              numTries -= 1;
          }
          
          len += 1;
      }
      
      if (len > max) {
          max = len;
      }
  }
  
  //run backwards
  for (let i = s.length - 1; i >= 0; i--) {
      let numTries = k;
      let len = 1;
      for (let j = i-1; j >= 0; j--) {
          if (numTries === 0 && s[j] !== s[i]) {
              break;
          } 
          
          if (s[j] !== s[i]){
              numTries -= 1;
          }
          
          len += 1;
      }
      
      if (len > max) {
          max = len;
      }
  }
  
  return max;
};