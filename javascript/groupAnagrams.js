//from leetcode medium: https://leetcode.com/problems/group-anagrams

var groupAnagrams = function(strs) {
  //edge case
  if (strs.length === 1) {
      return [[strs[0]]];
  }
  
  //set an boject of form {its ana.join(""), [arr of original strings]}
  const anas = {};
  for (let i = 0; i < strs.length; i++) {
      let s = strs[i].split("").sort().join("");
      if (anas[s] === undefined) {
          anas[s] = [strs[i]];
      } else {
          anas[s] = [...anas[s], strs[i]]
      }
  }
  
  
  //loop the object and push all values into ret
  const ret = [];
  for (let key in anas) {
      ret.push(anas[key])
  }
  
  return ret;
};

//PSEUDO
//set an boject of form {its ana.join(""), [arr of original strings]}
//loop strings
//split and sort and then join and put in obj

//loop the object and push all values into ret
//push those into ret 

//return ret