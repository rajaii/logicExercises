//from leetcode easy https://leetcode.com/problems/add-binary/

var addBinary = function(a, b) {
    //determine which one to loop
    let sum = '';
    let carry =  '0';
    let looper;
    let other;
    let diff;
    
    if (a.length >= b.length) {
        looper = a;
        other = b;
        diff = a.length - b.length;
    } else {
        looper = b;
        other= a;
        diff = b.length - a.length;
    }
       
    //loop backwards computing the binary addition and concatenatig to sum as it iterates
    for (let i = looper.length - 1; i >= -1; i--) {
            if (i === -1 && carry !== '1') {
                break;
            } else if (i === -1 && carry === '1') {
                sum = '1'.concat(sum);
            } else {
            if (i - diff < 0) {
                while (carry === '1') {
                if (looper.slice(0, i + 1)[looper.slice(0, i + 1).length - 1] === '1') {
                i -= 1;    
                sum = '0'.concat(sum);
                carry = '1';
                
                } else if (looper.slice(0, i + 1)[looper.slice(0, i + 1).length - 1] === '0') {
                i -= 1;
                sum = '1'.concat(sum);
                carry = '0';
                } else {
                sum = '1'.concat(sum);
                break;
                }
                }
                sum = looper.slice(0, i + 1).concat(sum);
                break;  
            } else if (looper[i] === '1' && other[i-diff] === '1' && carry === '0') {
            sum = '0'.concat(sum);
            carry = '1';
        } else if (looper[i] === '1' && other[i-diff] === '1' && carry === '1') {
            sum = '1'.concat(sum);
            carry = '1';
        } else if ((looper[i] === '1' && other[i-diff] === '0' || looper[i] === '0' && other[i-diff] === '1') && carry === '1') {
            sum = '0'.concat(sum);
            carry = '1';
        } else if ((looper[i] === '1' && other[i-diff] === '0' || looper[i] === '0' && other[i-diff] === '1') && carry === '0') {
            sum = '1'.concat(sum);
            carry = '0';
        } else if (looper[i] === '0' && other[i-diff] === '0' && carry === '1') {
            sum = '1'.concat(sum);
            carry = '0'
        } else if (looper[i] === '0' && other[i-diff] === '0' && carry === '0') {
            sum = '0'.concat(sum);
            carry = '0';
        }}
    }
    
    
    return sum;
}