//https://leetcode.com/problems/fizz-buzz/

var fizzBuzz = function(n) {
  if (n === 1) {
      return ["1"];
  }
  
  let answer = ["1", "2"];
  for (let i = 3; i < n + 1; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          answer.push("FizzBuzz");
          continue;
      }
      
      if (i % 3 === 0) {
          answer.push("Fizz");
          continue;
      }
      
      if (i % 5 === 0) {
          answer.push("Buzz");
          continue;
      }
      
      answer.push(`${i}`);
  }
  
  return answer
};

//PSEUDO:

//let answer = ["1", "2",]
//loop to n checking
//out of loop ret answer