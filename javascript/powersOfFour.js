//  from leetcode easy: https://leetcode.com/problems/power-of-four/

var isPowerOfFour = function(n) {
    let i = 0;
    while (4 ** i <= n) {
        if (4 ** i === n) {
            return true;
        }
        i += 1;
    }
    
    return false;
};
