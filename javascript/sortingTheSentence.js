//from leetcode easy: https://leetcode.com/problems/sorting-the-sentence/

var sortSentence = function(sent) {
    //split sent into s and make the array to do operations on
    const s = sent.split(" ");
    const retArr = [];
    retArr.length = s.length + 1;
    
    //loop sent and populate retArr
    for (let i = 0; i < s.length; i++) {
        let index = parseInt(s[i][s[i].length - 1]);
        let sArr = s[i].split("");
        sArr.pop();
        let spliceVal = sArr.join("");
        retArr.splice(index, 1, spliceVal);
    }
    retArr.shift()
    return retArr.join(' ');
};

//split sent into s
//make retArr = []
//retArr.length = s.length + 1
//loop s
//splice sent[i] into retArr using the number on end
//retArr.shift()
//return retArr.join(" ")