// from leetcode easy https://leetcode.com/problems/check-if-word-equals-summation-of-two-words

var isSumEqual = function(firstWord, secondWord, targetWord) {
    const letterVals = {
        "a": "0",
        "b": "1",
        "c": "2",
        "d": "3",
        "e": "4",
        "f": "5",
        "g": "6",
        "h": "7",
        "i": "8",
        "j": "9",
    }
    
    let first = "";
    let second = "";
    let target = "";
    
    for (let i = 0; i < firstWord.length; i++) {
        first += letterVals[firstWord[i]];
    }
    
    for (let i = 0; i < secondWord.length; i++) {
        second += letterVals[secondWord[i]];
    }
    
    for (let i = 0; i < targetWord.length; i++) {
        target += letterVals[targetWord[i]];
    }
    console.log("first", first, "second", second, "third", target)
    if (parseInt(first) + parseInt(second) === parseInt(target)) {
        return true;
    }  
    
    return false;
};

//refactor after study:

var isSumEqual = function(firstWord, secondWord, targetWord) {
    const wordToInt = word => parseInt([...word].reduce((a,c) => a + (c.charCodeAt(0) - "a".charCodeAt(0)), ""))
    
    return wordToInt(firstWord) + wordToInt(secondWord) === wordToInt(targetWord)
};