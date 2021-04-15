//from leetcode easy https://leetcode.com/problems/add-to-array-form-of-integer/

var addToArrayForm = function(n, K) {
    //turn k into array
    const k = K.toString().split('').map(n => parseInt(n));
    const retArr = [];
    let i = n.length - 1;
    let j = k.length - 1;
    let carry = 0;
    let longer;
    
    if (i >= j) {
        longer = n;
    } else {
        longer = k
    }
    

    
    //loop both backwards and do the addition manually
    while (i >= 0 && j >= 0) {
        if (n[i] + k[j] + carry > 9) {
            if (longer === n && i === 0 || longer === k && j ===0) {
                retArr.unshift((n[i] + k[j] + carry).toString().split('').map(n => parseInt(n))[1]);
                retArr.unshift((n[i] + k[j] + carry).toString().split('').map(n => parseInt(n))[0]);
                carry = 0;
                i -= 1;
                j -= 1;
                break;
            }
            let toAdd = (n[i] + k[j] + carry).toString().split('').map(n => parseInt(n))[1];
            retArr.unshift(toAdd);
            carry = 1;
            i -= 1;
            j -= 1;
        } else {
            retArr.unshift(n[i] + k[j] + carry);
            carry = 0;
            i -= 1;
            j -= 1;
        }
        
    }
    
    //handle the case where carry leftover
    while (carry > 0) {
        if (i >= 0) {
            if (n[i] + carry > 9) {
                if (i === 0) {
                retArr.unshift((n[i] + carry).toString().split('').map(n => parseInt(n))[1]);
                retArr.unshift((n[i] + carry).toString().split('').map(n => parseInt(n))[0]);
                carry = 0;
                i -= 1;
                break;
            }
                let toAdd = (n[i] + carry).toString().split('').map(n => parseInt(n))[1];
                retArr.unshift(toAdd);
                carry = 1;
                i -= 1;
            } else {
                retArr.unshift(n[i] + carry);
                carry = 0;
                i -= 1;
            }
        }
        
        if (j >= 0) {
            if (k[j] + carry > 9) {
                if (j === 0) {
                retArr.unshift((k[j] + carry).toString().split('').map(n => parseInt(n))[1]);
                retArr.unshift((k[j] + carry).toString().split('').map(n => parseInt(n))[0]);
                carry = 0;
                j -= 1;
                break;
            }
                let toAdd = (k[j] + carry).toString().split('').map(n => parseInt(n))[1];
                retArr.unshift(toAdd);
                carry = 1;
                j -= 1;
            } else {
                retArr.unshift(k[j] + carry);
                carry = 0;
                j -= 1;
            }
        }
    }
    
    
    
    //push rest into retArr
    while (i >= 0 || j >= 0) {
        if (i >= 0) {
            retArr.unshift(n[i]);
            i -= 1;
        }
        
        if (j >= 0) {
            retArr.unshift(k[j]);
            j -= 1;
        }
    }
    
    return retArr;
    
};

//edge cases: large numbers > 9007199254740991, 


//[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
//                                  [5,1,6]
//                                   5  7  9

//PSUEDO
//stringify num
//stringify k
//add k to num by looping both backwards and doing the addition (stored as strings)
