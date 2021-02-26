//from leetcode easy: https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-character

var modifyString = function(str) {
    //set the alphabet array to check against in the loop and split str
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let s = str.split('');
    
    //loop s sub-looping alpha if ? arises, swapping with letters that don't lead to repeats 
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '?') {
            s[i] = alpha[alpha.findIndex(x => {
               if (x !== s[i-1] && x !== s[i+1]) {
                   return x;
               } 
            })]
        }
    }

    return s.join('');
};

//edge cases: length 1. ? at beginning or end(loop logic) 
//?'s: limits on time/space?  

//PSEUDO:
//set alpha array
//set s = str.split('')
//loop s
//if s[i] === '?'
//loop alpha
//if (i === 0 && s[i+1] != alpha[j]):
//s[i] = alpha[j]
//break
//else if (i === s.length - 1 && s[i-1] != alpha[j]) {
//s[i] = alpha[j]
//break
//else
//if (s[i-1] != alpha[j] && s[i+1] != alpha[j])
//s[i] = alpha[j]

//return s.join('')

//https://leetcode.com/problems/expressive-words/