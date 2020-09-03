//from leetcode easy https://leetcode.com/problems/valid-perfect-square/


var isPerfectSquare = function(num) {
    if ((num ** (1/2)) % 1 === 0) {
        return true
    }
    return false
};

//edge cases: num == 1
//?'s: 

//if num ** (1/2) % 1 ===0 t else false