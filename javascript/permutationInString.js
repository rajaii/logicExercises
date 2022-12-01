// from leetcode medium: https://leetcode.com/problems/permutation-in-string/

var checkInclusion = function(s1, s2) {
  if (s2.length < s1.length) {
      return false;
  }
  
  const s1Obj = {};
  
  for (let i = 0; i < s1.length; i++) {
      s1Obj[s1[i]] = s1Obj[s1[i]] + 1 || 1;
  }
  
  
  for (let i = 0; i < s2.length; i++) {
      let s = s2.slice(i, (i + s1.length));
      
      const s2Obj = {};
      for (let j = 0; j < s.length; j++) {
          s2Obj[s[j]] = s2Obj[s[j]] + 1 || 1;
      }
      
      for (let k = 0; k < Object.keys(s1Obj).length; k++) {
          if (s2Obj[Object.keys(s1Obj)[k]] !== s1Obj[Object.keys(s1Obj)[k]]) {
              break;
          }
          
          if (k === Object.keys(s1Obj).length - 1 && s2Obj[Object.keys(s1Obj)[k]] === s1Obj[Object.keys(s1Obj)[k]]) {
              return true;
          }
      }
          
  }
  
  return false;
 
};