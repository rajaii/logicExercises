//from leetcode easy: https://leetcode.com/problems/sort-array-by-parity

var sortArrayByParity = function(a) {
    //set evens and odds array that we can push into as we loop a
    let evens = [];
    let odds = [];
    
    //loop a pushing into evens or odds based off of a[i] % 2's value
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            evens.push(a[i]);
        } else {
            odds.push(a[i]);
        }
    }
    
    //sort both arrays, and then return the concatenation of the 2 sorted arrays
    evens.sort();
    odds.sort();
    return evens.concat(odds);
    
};

//edge cases a.length = 1,duplicate values, 
//?'s: time/space limits, does it have to be sorted by evens then odds?
//PSEUDO
//set evens = []
//set odds = []
//loop a
//if a[i] % 2 === 0
//  evens.push(a[i])
//else
//  odds.push(a[i])

//sort both
//concatenate the arrays