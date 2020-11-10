//from leetcode easy https://leetcode.com/problems/self-dividing-numbers

var selfDividingNumbers = function(left, right) {
    //set the array to return
    let retArr = [];
    let s;
    
    //loop from left to right checking if each num is self-dividing, and pushing into retArr if so
    for (let i = left; i <= right; i++) {
        if (i.toString().includes('0')) {
            continue;
        } else {
            
            for (let j = 0; j < i.toString().length; j++) {
                if (i % parseInt(i.toString()[j], 0) != 0) {
                    break;
                } else if (j === i.toString().length - 1 && (i % parseInt(i.toString(),10)) === 0) {
                    retArr.push(i);
                }
            }
        }
    }
    
    return retArr;
    
};

//?'s: limits on time/space? 
//edge cases: left = right,

//set retArr= []
//loop from left to right (including right)

//s = toString each num
 
//if (s.includes('0'))
//continue
//else loop to s.length
//if (parseInt(s,10) % s[i] != 0)
//break
//else if (i === s.length && parsetInt(s, 10) % s[i] === 0)
//retArr.push(parseInt(s,10))

//return retArr