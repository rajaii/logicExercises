//from leetcode easy: https://leetcode.com/problems/reverse-only-letters/

var reverseOnlyLetters = function(s) {
    //remove all non letters and split both s and the newS
    let newS = s.replace(/[^a-zA-Z]/g, '');
    newS = newS.split('');
    s = s.split('');
    let regex = new RegExp(/[^a-zA-Z]/);
    
    
    //loop and swap newS
    let half;
    if (newS.length % 2 === 0) {
        half = newS.length / 2;
    } else {
        half = Math.floor(newS.length / 2);
    }
    for (let i = 0; i < half; i++) {
        let temp = newS[i];
        newS[i] = newS[newS.length - 1 - i];
        newS[newS.length - 1 - i] = temp;
        
    } 
    
    //loop s swapping all letters with newS.shift()
    for (let i = 0; i < s.length; i++) {
        if (regex.test(s[i]) === true) {
            continue;
        } else {
            s[i] = newS.shift();
        }
    }
    
    return s.join('');
};

//edge cases: s.length == 1 or 2
//?'s: limits on time/space? 

//PSEUDO:

//remove all non letters
//split newS into array
//loop to half of newS swapping on a backwards in place loop
//split s
//loop s 
//if s[i] is a letter:
//swap with newS.shift();

//return s.join('')