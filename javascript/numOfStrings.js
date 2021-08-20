//  from leetcode easy: https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word

var numOfStrings = function(patterns, word) {
    let count = 0;
    for (let i = 0; i < patterns.length; i++) {
      if (word.includes(patterns[i])) {
          count += 1;
      }  
    }
      return count;
  };

