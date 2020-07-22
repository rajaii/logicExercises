//from leetCode easy https://leetcode.com/problems/to-lower-case/submissions/

var toLowerCase = function(str) {
    let retStr = ''
    for (let i = 0; i < str.length; i++) {
        retStr += str[i].toLowerCase()
    }
    return retStr
};

//?'s will we get empty strings?
//edge cases empty, 

//loop through str and concat a new str with str[i].toLowerCase()