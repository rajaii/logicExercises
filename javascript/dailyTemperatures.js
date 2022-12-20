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

//refactor to o(1) space still o(n^2) on time
var dailyTemperatures = function(t) {
  //loop checking and counting days and pushing into retArr accordingly
  for (let i = 0; i < temperatures.length; i++) {
    let count = 0;
    if (i === temperatures.length - 1) {
        temperatures[i] = 0;
        break;
    }
    for (let j = i+1; j < temperatures.length; j++) {
        count += 1;
        if (temperatures[i] < temperatures[j]) {
            temperatures[i] = count;
            break;
        }
        if (j === temperatures.length - 1 && temperatures[i] >= temperatures[j]) {
            temperatures[i] = 0;
        }
    }
}

return temperatures;

};

//refactor to o(n) runtime o(n) space using stack

var dailyTemperatures = function(temperatures) {
  //loop checking and push into stack if not > prev
  const ret = [];
  const stack = [[temperatures[0], 0]];
  for (let i = 1; i < temperatures.length; i++) {
      if (temperatures[i] <= stack[stack.length - 1][0]) {
          stack.push([temperatures[i], i]);
      } else {
          while (stack[stack.length-1] && stack[stack.length-1][0] < temperatures[i]) {
              ret[stack[stack.length-1][1]] = i - stack[stack.length-1][1];
              stack.pop()
          }
          stack.push([temperatures[i],i])
      }
      
  }
  
  for (let i = 0; i < ret.length; i++) {
      if (ret[i] === undefined) {
          ret[i] = 0;
      }
  }

  while (ret.length < temperatures.length) {
      ret.push(0);
  }

  return ret;

};