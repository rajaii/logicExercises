//from leetcode med https://leetcode.com/problems/sort-characters-by-frequency

var frequencySort = function(s) {
    //set memory and make the object needed
    let retStr = "";
    let counts = {};
    let countArr = [];
    let chars = [];
    
    for (let i = 0; i < s.length; i++) {
        counts[s[i]] = counts[s[i]] + 1 || 1;
    }
    
    //loop the object and append to retStr
    for (let key in counts) {
        countArr.push(counts[key]);
        chars.push(key);
    }
    
    let tagger = s.length;
    while (tagger > 0) {
        let max = Math.max(...countArr);
        let index = countArr.indexOf(max);
        for (let i = 0; i < countArr[index]; i++) {
            retStr = `${retStr}${chars[index]}`
        }
        chars.splice(index, 1);
        countArr.splice(index, 1);
        tagger -= 1;
    }
    
    return retStr;
};