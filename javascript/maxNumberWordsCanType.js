//  from leetcode easy https://leetcode.com/problems/maximum-number-of-words-you-can-type

var canBeTypedWords = function(text, brokenLetters) {
    //. split up text and set the counter
    const splitText = text.split(' ');
    let count = 0
    
    //. loop to tag each word in splitText and check if it has one of the broken
    for (let i = 0; i < splitText.length; i++) {
        for (let j = 0; j < splitText[i].length; j++) {
            if (brokenLetters.includes(splitText[i][j])) {
                count++;
                break;
            }
        }
    }
    
    return splitText.length - count;
};

//edge cases
//split text into an array
//loop the array
//if brokenLetters.includes(text[i][j])
//count ++
//return count