//from leetCode: easy https://leetcode.com/problems/string-matching-in-an-array/

var stringMatching = function(words) {
    const retArr = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
        console.log(`words[i]: ${words[i]} words[j]: ${words[j]}`)
         if (words[i] === words[j]) {
             continue
         } else if (retArr.includes(words[i])) {
             continue
         } else if (words[j].includes(words[i])) {
            retArr.push(words[i])
        } else {
            continue
        }
        }
    }
    return retArr
};