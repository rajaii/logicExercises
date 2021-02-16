//from leetcode easy: https://leetcode.com/problems/maximum-69-number/

var maximum69Number  = function(num) {
    const n = num.toString().split('');
    
    //loop n and change the first 6 to a 9
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '6') {
            n[i] = '9';
            break;
        }
    }
    
    return parseInt(n.join(''), 10);
};

//edge cases: all 9,
//?'s: limits on time/space?

//const n = num.toString().split('');
//loop n and change the first 6 to a 9

//return n.join('');