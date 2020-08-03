/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let openParenC = 0;
    let closeParenC = 0;
    let openBracC = 0;
    let closeBracC = 0;
    let openCurlC = 0;
    let closeCurlC = 0;
    
    for (let i = 0, i < s.length; i++) {
        if (s[i] === '(') {
            openParenC += 1;
        } else if (s[i] === ')') {
            closeParenC += 1;
        } else if (s[i] === '[') {
            openBracC += 1;
        } else if (s[i] === ']') {
            closeBracC += 1;
        } else if (s[i] === '{') {
            openCurlC += 1;
        } else if (s[i] === '}') {
            closeCurlC += 1;   
        }
     }
    
    if (openParenC != closeParenC || openBracC != closeBracC || openCurlC != closeCurlC) {
        return false
    }
};

//edge cases:length 1 or 2, empty strings, 
//?'s limits on space/time, correct order? 

//{{}[[]]} v
//{{[[}]]} !v

//obj?
//loop through once to check if all opens and closes are equal if not ret false/
    
//all have to be equal, and all within an open have to close before its close

//set 6 more vars isopenPOpen = false ...
//loop through again and set isOpens to true on each iteration

//run nestedLoop and set isOpen to true and  counter to 1
