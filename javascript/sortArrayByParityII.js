//from leetcode: easy: https://leetcode.com/problems/sort-array-by-parity-ii/

var sortArrayByParityII = function(a) {
    //set the variables for memeory on odds/evens and return value
    let retArr = [];
    let evens = [];
    let odds = [];
    
    //loop a and push into evens or odds
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            evens.push(a[i]);
        } else {
            odds.push(a[i]);
        }
    }
    
    //if even.length > odds.length loop evens pushing evens[i] into retArr then odds[i] into 
    //retArr if it exists.  If odds has a bigger length then same logic flipped to run on odds
    // if (evens.length > odds.length) {
        for (let i = 0; i < evens.length; i++) {
            retArr.push(evens[i]);
            retArr.push(odds[i]);
            
        }
    
    return retArr;
    
};