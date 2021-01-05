//from leetcode easy: https://leetcode.com/problems/relative-ranks/

var findRelativeRanks = function(n) {
    //keep the original value of the array as it will be sorted in place and postions       //object
    const newN = [...n];
    const positions = {};
    
    //sort n descending
    n.sort((a,b) => b - a);
    
    //populate positions to be of the form {n[i]: i+1}
    for (let i = 0; i < n.length; i++) {
        positions[n[i]] = i + 1;
    }
    
    //loop newN and set it to be the value of positions[newN[i]] or the medal strings
    for (let i = 0; i < newN.length; i++) {
        if (positions[newN[i]] === 1) { 
        newN[i] = 'Gold Medal';
        } else if (positions[newN[i]] === 2) {
        newN[i] = 'Silver Medal';
        } else if (positions[newN[i]] === 3) {
        newN[i] = 'Bronze Medal'
        } else {
        newN[i] = positions[newN[i]].toString();
        }

    }
    
    return newN;
};

//edge cases: n.length == 1;
//questions: limits on time/space? What to do if less than 3?

//PSEUDO:



//set newN = n
//n.sort((a,b) => a - b)

//let positions = {}
//loop n making postions of the form {n[i]: i+1}

//loop newN
//if (positions[newN[i]] === 1) 
//newN[i] = 'Gold Medal'
//else if (positions[newN[i]] === 2)
//newN[i] = 'Silver Medal'
//else if (positions[newN[i]] === 3) 
//newN[i] = 'Bronze Medal'
//else:
//newN[i] = positions[newN[i]].toString()

//return newN

//[10,3,8,9,4]
//[10,3,8,9,4]

//[{10:1},{9:2},{8:3},{4:4},{3:5}]
//[1 ,2,3,4,5]

//[1, 5,3,2,4]