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

//Refactor after study:

var characterReplacement = function(s, k) {
  if (k === 0) {
      let max = 1;
      let temp = 1;
      for (let i = 1; i < s.length; i++) {
          if (s[i] === s[i-1]) {
              temp += 1;
              if (temp > max) {
                  max = temp;
              }
          } else {
              if (temp > max) {
                  max = temp;
                  temp = 1
              }
          }
      }
      return max;
  }
  let counts = {};
  let right = 0;
  let maxLen = 0;
  
  for (let left = 0; left < s.length; left++) {
      if (left > 0) {
          let len = (right - left) + 1;
          let max = Math.max(...Object.values(counts));
          if (len - max > k) {
              counts[s[left]] -= 1;
              continue;
          }
      }
      
      counts[s[right]] = counts[s[right]] + 1 || 1;
      
      while (right < s.length) {
          len = (right - left) + 1;
          max = Math.max(...Object.values(counts));
                         
          if (len - max <= k) {
              if (len > maxLen) {
                  maxLen = len;
              }
              right++;
              counts[s[right]] = counts[s[right]] + 1 || 1;
          } else {
              counts[s[left]] -= 1;
              counts[s[right]] -= 1;
              break;
          }
          
      }
      
  }
  
  return maxLen;
  
};