//from leetcode easy: https://leetcode.com/problems/reverse-words-in-a-string-iii/submissions/

var reverseWords = function(str) {
    //set the return string to append to and split str
    let retStr = '';
    let s = str.split(' ');
    
        
    //double loop s to tag each word and swap front with back
    for (let i = 0; i < s.length; i++) {
        let temp;
        let a = s[i].split('')   
        s[i] = a;
        for (let j = 0; j < s[i].length; j++) {
            //s[i].length % 2 === 0 ? j < s.length / 2 : j < ((s.length / 2) - ((s.length / 2) % 1))
            if (s[i].length % 2 === 0 && j === s[i].length / 2) {
                let x = s[i].join('');
                s[i] = x;
                break;
            } else if (s[i].length % 2 === 1 && j === ((s[i].length / 2) - ((s[i].length / 2) % 1))) {
                let b = s[i].join('');
                s[i] = b;
                break;
            } else {
            temp = s[i][j];
            s[i][j] = s[i][s[i].length - 1 - j];
            s[i][s[i].length - 1 - j] = temp;
            }
        }
    }
    
   
    
    
    //loop s and append each word with a ' ' at end, for first and last word refer to 
    //str[str.length - 1] and str[0]
    if (s.length === 1) {
            retStr += s[0];
            return retStr
        }
    
    for (let i = 0; i < s.length; i++) {
        
        if (i === 0) {
            if (s[i][0] === ' ' && s[i][s[i].length - 1] === ' ') {
               retStr += ` ${s[i]} ` 
            } 
            else {
                retStr += `${s[i]} `
            }
        } else if (i === s.length - 1) {
            if (s[i][s[i].length - 1] != ' ') {
                retStr += `${s[i]}`
            } else {
              retStr += `${s[i]} `  
            }
        } else {
            retStr += `${s[i]} `
        }
    }
    
    return retStr
};

//edge cases: s.length == 1 || 0;  whitespace at end or beginning
//?'s: limits on time/space?  limits on inputs?

//PSEUDO:
//set retStr = ''
//s = str.split(' ')

//double loop s to tag each word
//use a temp to hold the values as swap

//loop s appending `${s[i]} ` to retStr

//return retStr