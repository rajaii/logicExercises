//from leetcode

var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let s = x.toString()
    let a = s.split('')
    a.reverse()
    yStr = a.join('')
    y = parseInt(yStr)
    if (y === x) {
        return true
    } else {
        return false
    }
    
};