//  from leetcode medium: https://leetcode.com/problems/print-words-vertically/

var printVertically = function(str) {
    // set the memory needed and split str
    const s = str.split(" ");
    const retArr = [];
    
    // find the string with highest length in s
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i].length > maxLen) {
            maxLen = s[i].length;
        }
    }
    
    //loop to that length and push an empty string in retArr  each time
    for (let i = 0; i < maxLen; i++) {
        retArr.push("");
    }
    
    //double loop s and concat right value to its string in retArr
    let j = 0;
    while (retArr[retArr.length - 1].length < maxLen && j < maxLen) {
        for (let i = 0; i < s.length; i++) {
            if (s[i][j] === undefined && s.slice(i).some(f => f.length >= maxLen)) {
                retArr[j] += " ";
            } else if (s[i][j] === undefined && s.slice(i).every(s => s[j] === undefined)) {
                console.log("in")
                continue; 
            } else if (s[i][j] === undefined && !s.slice(i).some(f => f.length >= maxLen)) {
                retArr[j] += " ";
            }
            else {
                retArr[j] += s[i][j];
            }
        }
        j += 1;
     }
    
    return retArr;
};

//PSEUDO:
//const s = str.split(" ");
//const retArr = [];

//find the string with highest length in s
//let maxLen = 0;
//for (let i = 0; i < s.length; i++) {
//if (s[i].length > maxLen) {
//maxLen = s[i].length;
//}
//}
//loop to that length and push an empty string in retArr  each time

//double loop s and concat s[i][i] to its string in retArr
//if there is no charachter for a string add " " instead
//let j = 1
//while (retArr[retArr.length - 1].length < maxLen) {
//for (let i = 0; i < s.length; i++) {
//if (s[i][j] === undefined) {
//retArr[i] += " ";
//} else {
//retArr[i] += s[i][j]
//}
//}
//j += 1;
 //}

//return retArr;