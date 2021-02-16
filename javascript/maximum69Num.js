//from leetcode easy: https://leetcode.com/problems/maximum-69-number/

var maximum69Number  = function(num) {
    const n = num.toString().split('');
    
    //find index of first 6 and swap with 9
    let i = n.indexOf('6');
    if (i != -1) {
        n[i] = '9'
    }
    
    return parseInt(n.join(''), 10);
};

//edge cases: all 9,
//?'s: limits on time/space?

//const n = num.toString().split('');
//loop n and change the first 6 to a 9

//return n.join('');