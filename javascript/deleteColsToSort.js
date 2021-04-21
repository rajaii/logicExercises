//from leetcode easy: https://leetcode.com/problems/delete-columns-to-make-sorted

var minDeletionSize = function(s) {
    //  make an alpha object to track if sorted and output to iterate and cols
    const alpha = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25,'z': 26};
    let keepers = 0;
    const cols = s[0].length;
    let iter = 0;
    
    //  while loop up to cols thus looping s and checking if sorted on each col
    while (iter < cols) {
        for (let i = 0; i < s.length; i++) {
            if (i === s.length - 1) {
               output += 1
               iter += 1 
            } else if (alpha[s[i][iter]] > alpha[s[i+1][iter]]) {
                iter += 1
                break;
            }
        }
    }
    
    return cols - keepers;
};

//refactor to directly tag the del cols:

var minDeletionSize = function(s) {
    //  make an alpha object to track if sorted and output to iterate and cols
    const alpha = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5, 'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10, 'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15, 'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20, 'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25,'z': 26};
    let dels = 0;
    const cols = s[0].length;
    let iter = 0;
    
    //  while loop up to cols thus looping s and checking if sorted on each col
    while (iter < cols) {
        for (let i = 0; i < s.length; i++) {
            if (i === s.length - 1) {
               iter += 1 
            } else if (alpha[s[i][iter]] > alpha[s[i+1][iter]]) {
                dels += 1;
                iter += 1
                break;
            }
        }
    }
    
    return dels;
};

//edge cases: 1 string
//?'s: limits on time/space?

//PSEUDO:
//make an alphabet object {a: 1, b: 2 ...}
//let output = 1;
//let cols = s[0].length
//let iter = 0;
//loop s (while iterator < cols)
//for loop through s checking alpha[s[i][iter]] <= alpha[s[i+1][iter]] 
//if so and i === s.length - 1:
//output += 1
//iter += 1


//else if alpha[s[i][iter]] > alpha[s[i+1][iter]]:
//iter += 1
//break;

//return output