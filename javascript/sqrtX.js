//leetCode easy: https://leetcode.com/problems/sqrtx/

var mySqrt = function(x) {
    return Math.floor(x ** (1/2));
};

//edge cases: x = 0 or 1, all cases where you have float answers
//?'s: limits on time/space

//PSEUDO:

//x ** 1/2
//floor that value 
//return