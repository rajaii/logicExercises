//from leetcode easy: https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/

var isPrefixString = function(str, w) {
    //set the string to concat to
    let s = "";
    
    //loop words and concat w[i] to s and run checks
    for (let i = 0; i < w.length; i++) {
        s += w[i];
        if (s === str) {
            return true;
        }
        if (s.length > str.length) {
            return false;
        }
    }
    
    return false;
};

//PSEUDO

//set s = '';
//loop words
//s + w[i];
//if (s === str) {
//return true;
//}
//if (s.length > str.length) {
//return false
//}

//return false;


//refactor 
var isPrefixString = function(str, w) {
    //set the string to concat to
    let s = "";
    
    //loop words and concat w[i] to s and run checks
    let i = 0;
    while (s.length <= str.length) {
        s += w[i];
        if (s === str) {
            return true;
        }
        if (s.length > str.length) {
            return false;
        }
        i += 1;
    }
    
    return false;
};