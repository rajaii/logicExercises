//  from leetcode medium: https://leetcode.com/problems/longest-substring-without-repeating-characters

var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
      return 0;
  }
  
  if (s.length === 1 || s.split("").every(i => i === s[0])) {
      return 1;
  }
  
  // set the memory needed
  let subs = "";
  
  //double loop and check if substring is longer than the one held in memory
  for (let left = 0; left < s.length; left++) {
      const S = new Set();
      S.add(s[left]);
      let temp = `${s[left]}`
      
      for (let right = left + 1; right < s.length; right++) {
          if (!S.has(s[right])) {
              S.add(s[right]);
              temp = `${temp}${s[right]}`
              if (right === s.length - 1 && temp.length > subs.length) {
                  subs = temp;
              }
              continue;
          } else {
              if (temp.length > subs.length) {
                  subs = temp;
              }
              break;
          }
      }
  }

  return subs.length;


};

//PSEUDO:
//handle edges

//let subs = "";
//double loop left (i) = 0, right (j) = left + 1
//in inner loop make Set and store all values you have encountered
//Set.add(s[left])
//let temp = `${s[left]}`
//if !Set.has(!Set.has(s[right])) {
//Set.add(s[right]);
//temp = `${temp}${s[right]}`
//continue;
//} else {
//if (temp.length > subs.length) {
//subs = temp;
//}
//break;
//}
//
//

//out of loop return subs.length;
//o(n^2) time o(n) space