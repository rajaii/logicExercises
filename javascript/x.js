



const n = [1,2,3,0,0]
const num = n.join('');
console.log(parseInt(num,10))



//https://leetcode.com/problems/add-to-array-form-of-integer/

var addToArrayForm = function(num, K) {
    //turn k into array
    const n = num.join('');
    const k = K.toString().split('');
    const retArr = [];
    let i = n.length - 1;
    let j = k.length - 1;
    let carry = 0;
    
    //loop both backwards and do the addition manually
    while (i >= 0 && j >= 0) {
        if (n[i] + k[j] + carry > 9) {
            let toAdd = (n[i] + k[j] + carry).toString().split('')[1];
            retArr.unshift(toAdd);
            carry = 1;
            i -= 1;
            j -= 1;
        } else {
            retArr.unshift(n[i] + k[j]);
            carry = 0;
            i -= 1;
            j -= 1;
        }
        
    }
    
    //handle the case where carry leftover
    while (carry > 0) {
        if (n[i] >= 0) {
            if (n[i] + carry > 9) {
                let toAdd = (n[i] + carry).toString().split('')[1];
                retArr.unshift(toAdd);
                carry = 1;
                i -= 1;
            } else {
                retArr.unshift(n[i] + carry);
                carry = 0;
                i -= 1;
            }
        }
        
        if (k[j] >= 0) {
            if (k[j] + carry > 9) {
                let toAdd = (k[j] + carry).toString().split('')[1];
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