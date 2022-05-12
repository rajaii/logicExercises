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
//Refactor
var findDifferentBinaryString = function(n) {
  const list = [];
  
  const len = 2 ** n.length - 1;
  
  for (let i = 0; i < len + 1; i++) {
      if (!n.includes(i.toString(2).padStart(n.length, "0"))) {
          return i.toString(2).padStart(n.length, "0");
      }
  } 
  
};

//refactor to o(n)
var findDifferentBinaryString = function(n) {
  const list = [];
  let nObj = {};
  
  //make an object of the form n[i]: n[i];
  for (let i = 0; i < n.length; i++) {
      if (!nObj[n[i]]) {
          nObj[n[i]] = n[i];
      }
  }
  
  const len = 2 ** n.length - 1;
  
  for (let i = 0; i < len + 1; i++) {
      if (!nObj[i.toString(2).padStart(n.length, "0")]) {
          return i.toString(2).padStart(n.length, "0");
      }
  } 
  
};

//refactor to o(n) using Set more efficient
var findDifferentBinaryString = function(n) {
  const list = [];
  let nSet = new Set();
  
  //make an object of the form n[i]: n[i];
  for (let i = 0; i < n.length; i++) {
      if (!nSet.has(n[i])) {
          nSet.add(n[i])
      }
  }
  
  const len = 2 ** n.length - 1;
  
  for (let i = 0; i < len + 1; i++) {
      if (!nSet.has(i.toString(2).padStart(n.length, "0"))) {
          return i.toString(2).padStart(n.length, "0");
      }
  } 
  
};