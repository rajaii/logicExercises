//from leetcode easy https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function(words) {
    //set the morse code object to set the letters to and the count object to set the code in
    let morseCode = {'a': ".-", 'b': "-...", 'c': "-.-.", 'd': "-..", 'e': ".", 'f': "..-.",   'g': "--.", 'h': "....", 'i': "..", 'j': ".---", 'k': "-.-", 'l': ".-..", 'm': "--", 'n':  "-.", 'o': "---", 'p': ".--.", 'q': "--.-", 'r': ".-.", 's': "...", 't': "-", 'u': "..-", 'v': "...-", 'w': ".--", 'x': "-..-", 'y': "-.--", 'z': "--.."
    };
    let count = [];
    let temp = '';
    //double loop words pushing into count if they are unique
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            temp += morseCode[words[i][j]];
            if (j === words[i].length - 1) {
                if (!count.includes(temp)) {
                    count.push(temp)
                    temp = '';
                } else {
                    temp = '';
                }
            }
        } 
    }

    return count.length;
};

//edge cases: words is empty or 1 word
//?'s:

//PSEUDO:
//set morseCode = {}
//set temp = '';
//set count = {}
//double loop words
//temp += morseCode[words[i][j]]
//if (j === words[i].length)
//if (count[temp] === undefined)
//count[temp] = 1;
//else 
//count[temp] += 1:

//return Object.keys(count).length;

//refactor:
//did not need object
