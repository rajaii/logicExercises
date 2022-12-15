//from leetcode medium: https://leetcode.com/problems/daily-temperatures/

var dailyTemperatures = function(t) {
  //set the array to push into
  const retArr = [];

  //loop checking and counting days and pushing into retArr accordingly
  for (let i = 0; i < t.length; i++) {
      let count = 0;
      if (i === t.length - 1) {
          retArr.push(0);
          break;
      }
      for (let j = i+1; j < t.length; j++) {
          count += 1;
          if (t[i] < t[j]) {
              retArr.push(count)
              break;
          }
          if (j === t.length - 1 && t[i] >= t[j]) {
              retArr.push(0);
          }
      }
  }

  return retArr;

};