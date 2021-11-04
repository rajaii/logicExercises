//  from leetcode easy: https://leetcode.com/problems/find-smallest-letter-greater-than-target/


var nextGreatestLetter = function(letters, target) {
    if (!letters.includes(target)) {
    if (target > letters[letters.length-1]) {
        return letters[0];
    }      
    for (let i = 0; i < letters.length; i++) { 
        if (letters[i] > target) {
            return letters[i]
        }
    }
    } 
        let index = letters.indexOf(target);
        if (letters[letters.length - 1] === target) {
            for (let i = 0; i < letters.length; i++) {
                if ( letters[i] !== target) {
                    return letters[i]
                }
            }
        }      
        for (let i = index; i < letters.length; i++) {
            if (letters[i] !== target) {
                return letters[i];
            }
        }
};

// refactor after study:
var nextGreatestLetter = function(letters, target) {     
    for (let i = 0; i < letters.length; i++) { 
        if (letters[i] > target) {
            return letters[i]
        }
    }
    return letters[0];
    
};