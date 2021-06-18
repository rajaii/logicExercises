//  from leetcode easy: https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses

var maxDepth = function(s) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count += 1;
            if (count > max) {
                max += 1;
            }
        } else if (s[i] === ")") {
            count -= 1;
        }
    }
    
    return max;
};