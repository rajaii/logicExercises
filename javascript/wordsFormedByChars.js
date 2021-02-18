//from leetcode easy: https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/

var countCharacters = function(words, chars) {
    //set the string to concat to and return the length of
    let good = '';
    let temp;
    
    //loop to get each word and check if they are good and concat with good if so
    for (let i = 0; i < words.length; i++) {
        temp = chars.split('');
        for (let j = 0; j < words[i].length; j++) {
            if (j === words[i].length - 1 && temp.includes(words[i][j])) {
                good += words[i];
            } else if (!temp.includes(words[i][j])) {
                break;
            } else {
                temp.splice(temp.indexOf(words[i][j]), 1)
            }
        }
    }
    
    return good.length;
};

//edge cases: empty chars empty words, either or both
//?'s limits on time/space?

//PSEUDO:
//set good = ''
//double loop words
//if word[i][j] not in chars then break
//if every word[i][j] is in chars then good += words[i]
    
//can be used only once