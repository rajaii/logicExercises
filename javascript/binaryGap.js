//from leetcode easy: https://leetcode.com/problems/binary-gap/


var binaryGap = function(n) {
    //  stringify n
    let b = n.toString(2);
    
    //  loop counting consecutive 0's btw 1's
    let max = 0
    for (let i = 0; i < b.length; i++) {
        let count = 0;
        if (b[i] === '1') {
            while (b[i+1] === '0') {
                count += 1;
                i += 1;
            } 
            if (b[i+1] === undefined) {
                break;
            }
            count += 1;
            if (count > max) {
                max = count;
            }
        }
     }
    
    //  now loop counting checking for a consecutive 1 if max === 0
    
    if (max === 0) {
    for (let i = 0; i < b.length; i++) {
        if (b[i] === '1' && b[i+1] === '1') {
            max = 1;
            break
        }
    }
    }
    return max;
};

//edge cases: n === 1, 
//?s: 

//pseudo:
//let b = n.toString(2)

//loop once to see if any '11' or '101's in there
    //if so return 1
//let max = 0;
//loop again counting either consecutive 1's or 0's btw 1's and track max 