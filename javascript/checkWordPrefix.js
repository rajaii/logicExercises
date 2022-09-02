//  from leetcode easy: https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentenc

var isPrefixOfWord = function(sentence, searchWord) {
    const s = sentence.split(" ");
    for (let i = 0; i < s.length; i++) {
        if (searchWord.length <= s[i].length && s[i].slice(0,searchWord.length) === searchWord) {
            return i + 1;
        }
    }
    
    return -1;
};

//PSEUDO:

//loop sentence
//if (searchWord.length >= sentence[i].length && sentence[i].slice(0,searchWord.length) === searchWord) {
//return i;
//}

//return -1