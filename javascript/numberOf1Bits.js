//from leetcode easy: https://leetcode.com/problems/number-of-1-bits/

var hammingWeight = function(num) {
    //set the variable to count the 1's
    const n = num.toString(2);
    let hammingWeight = 0;
    
    //loop n iterating the counter if n[i] === 1
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '1') {
            hammingWeight += 1;
        }
    }
    
    return hammingWeight;
};