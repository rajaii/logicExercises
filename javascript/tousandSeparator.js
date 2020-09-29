//from leetcode easy https://leetcode.com/problems/thousand-separator/

var thousandSeparator = function(num) {
    //stringify num
    let n = num.toString();
    
    //if number is less than 1000, return n else run loop starting i at n.length % 3 adding
    //.'s on every 3, and in the end concatenating with the first n.length%3 digits and a .
    if (n.length < 4) {
        return n;
    } else {
        let counter = 1;
        let retStr = '';
        for (let i = (n.length % 3); i < n.length; i++) {
            if (counter === 3 && i === n.length - 1) {
                retStr += n.slice(i-2, i+1);
                break;
            } else if (counter === 3) {
                counter = 1;
                retStr += n.slice(i-2, i+1);
                retStr += '.';
            } else {
                counter += 1;
            }
        }
        if (n.length % 3 === 0) {
            return retStr;
        } else {
            let initialNums = n.slice(0, n.length % 3);
            initialNums += '.';
            return `${initialNums}${retStr}`;
        }
    }
    
};

//?'s: limits on time/space?
//edge cases: n has less than 4 digits

//PSEUDO:
//let n = num.toString()
//if(n.length < 4) => return n  
//else
//let counter = 0
//let retStr = ''
//loop n for (let i = 0 + (n.length % 3); i < n.length; i++)

//if counter = 3 => 
//counter = 0
//insert period at that point:
//retStr += n.slice(i-3,i) += '.' 
//else =>
//counter += 1

//'12 342233'
//initialNums = n.slice(0, n.length % 3)
//initialNums += '.'
//initialNums += retStr
//return retStr


//n.length mod 3 can be 0, 1, or 2
//for (let i = 0 + (n.length % 3); i < n.length; i++)
//'1 234 444'