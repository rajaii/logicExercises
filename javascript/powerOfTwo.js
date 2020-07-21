// from leetcode easy https://leetcode.com/problems/power-of-two

var isPowerOfTwo = function(n) {
    if (Math.log2(n) - Math.floor(Math.log2(n)) === 0) {
        return true
    } else {
        return false
    }
};

//?'s limits on input? js is wierd with really large nums'
//edge cases: large numse above 9007199254740991, 

//if Math.log2(n) is not a float then return true else return false