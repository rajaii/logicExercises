//from leetcode easy https://leetcode.com/problems/valid-perfect-square/


var isPerfectSquare = function(num) {
    return (num ** (1/2)) % 1 === 0 && true; 
};

//edge cases: num == 1
//?'s: 

//if num ** (1/2) % 1 ===0 t else false