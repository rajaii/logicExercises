// from leetcode easy: https://leetcode.com/problems/word-pattern


var wordPattern = function(pattern, str) {
    //handle edge case and prevent possible error in loop
    let compStr = str.split(' ');
    if (pattern.length != compStr.length) {
        return false
    }
    //push into obj the key of pattern and values of compstr only when they don't exist
    //in there and esp if the value is not in there to prevent duplicate keys with the same     //values  
    let tallyObj = {}
    for (let i = 0; i < pattern.length; i++) {
        
        if (tallyObj[pattern[i]] != undefined && tallyObj[pattern[i]] != compStr[i]) {
            return false
        }  else if (tallyObj[pattern[i]] === undefined && Object.values(tallyObj).includes(compStr[i])) {
         return false   
        } else if (tallyObj[pattern[i]] != undefined && tallyObj[pattern[i]] === compStr[i]) {
            continue
        } else {
            tallyObj[pattern[i]] = compStr[i]
        }
    }
    
    //if and only if you complete the loop return true
    return true
    
};

//?'s: so the bijection is not based on specificity?   limtis on time, spcae, or input?
//spaces in beginning or end of str?
//edge cases: spaces in beg/end of str - ignore for now.  empty str or pattern ignore for now //as per notes?  

//tallyObj = {}
//loop pattern
//if pattern[i] in obj and str[i] not value return false
//if pattern[i] in obj and str[i] is value continue
//if pattern[i] not in there push pattern[i]: str[i] into an object
//return false
    
//loop through tallyObj 
//if any dupes on values return false