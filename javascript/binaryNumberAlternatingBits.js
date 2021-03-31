//from leetcode easy https://leetcode.com/problems/binary-number-with-alternating-bits/

var hasAlternatingBits = function(num) {
    //turn num into binary string
    const n = num.toString(2);
    
    //loop n return false if at any point n[i+1] === n[i]
    for (let i = 0; i < n.length; i++) {
        if (n[i] === n[i+1]) {
            return false;
        }
    }
    
    return true;
    
    
};

//edge cases: 1, lead 0's in general assume none
//?'s:  How to handle 1?  could be 01

//PSEUDO:
//set n.toString(2)
//loop n
//if n[i+1] === n[i]
//return false

//return true out of loop