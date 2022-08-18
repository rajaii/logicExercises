//from leetcode medium https://leetcode.com/problems/repeated-string-match

var repeatedStringMatch = function(a, b) {
  //. set the memory needed
  let compStr = "";
  let count = 0;
  
  //loop and append to compStr and check as iterates
  while (compStr.length < b.length + a.length) {
      compStr = `${compStr}${a}`;
      count += 1;
      if (compStr.includes(b)) {
          return count;
      }
  }
  
  return -1;
}

//PSEUDO:


//make compStr = "";
//let count = 0;
//while (compStr.length < b.length * a.length) {
//compStr = `${compStr}${a}`;
//count += 1;
//if (compStr.includes(b)) {
//return count;
//}
//}

//out of loop 
//return -1a