//  from leetcode easy: https://leetcode.com/problems/longest-common-prefix

var longestCommonPrefix = function(s) {
  //set the initial common
  let common = "";
  let curIndex = 0;

  //double loop checking as we iterate
  while (true) {
      const toCheck = `${common}${s[0][curIndex]}`
      for (let i = 0; i < s.length; i++) {
          if (s[i].slice(0, curIndex + 1) !== toCheck) {
              return common;
          }

          if (i === s.length - 1) {
              common = toCheck;
          }
      }
      curIndex += 1;
  }

};

//set common to ""
//double loop checking s[0], s[1], etc
//if match continue setting common to `${common}${s[i]}`
//else return common

//refactor after study o(n * 2) time o (1) space:

var longestCommonPrefix = function(s) {
  if (s.some(st => st === "")) {
      return "";
  }

  if (s.length === 1) {
      return s[0];
  }

  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i].length > maxLen) {
          maxLen = s[i].length;
      }
  }

  let common = "";
  let cur = 0;
  let i = 0;
  let st;
  while (cur < maxLen) {
      if (i === 0) {
          st = s[i][cur];
      }

      if (s[i][cur] !== st) {
          return common;
      }

      if (i === s.length - 1) {
          common = `${common}${st}`
          cur += 1;
          i = 0;
          continue;
      }

      i += 1;

  }
   
  return common;
};