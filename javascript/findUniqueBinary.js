//  from leetcode medium: https://leetcode.com/problems/find-unique-binary-string/

var findDifferentBinaryString = function(n) {
  const list = [];
  
  const len = 2 ** n.length - 1;
  
  for (let i = 0; i < len + 1; i++) {
      list.push(i);
  } 
  
  const bins = list.map(num => num.toString(2).padStart(n.length, "0"));
  
  for (let i = 0; i < bins.length; i++) {
      if (!n.includes(bins[i])) {
          return bins[i];
      }
  }
  
};