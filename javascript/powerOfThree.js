//from leetcode easy https://leetcode.com/problems/power-of-three/submissions/

var isPowerOfThree = function(n) {
  //handle edge cases
   if (n === 1) {
       return true 
   } else if (n <= 0) {
       return false;
   } 
   
   else {
       
   let answer = 1;
   //loop to n multiplying 3 by three on each iteration
   for (let i = 0; i < n; i++) {
       if (answer === n) {
           return true;
       } else if (answer > n) {
           return false;
       } else {
           answer *= 3;
       }
   }
   
   
   return false;

   }  
 
};

//edge cases: negatives, 0
//?'s: will we be given floats?

//PSEUDO:
//log base 3(x) == n
//loop to n if 3 raised to i === n; return true;

//make a log for base 3 and run log base 3(n) = x

// Math.log = (function() {
//   var log = Math.log;
//   return function(n, base) {
//     return log(n)/(base ? log(base) : 1);
//   };
// })();
//     if (Math.log(n, 3) % 1 === 0)  {
//         return true;
//     }
//     return false;

//Above would work but JS floating point errors will not permit
//set answer
//loop to n
//multiply 3 by 3 for each i
//if the answer === n => return true
//if the answer > n => return false

//return false