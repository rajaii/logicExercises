//from leetcode easy https://leetcode.com/problems/rank-transform-of-an-array

var arrayRankTransform = function(arr) {
    //set the return array to push into and sort arr and also hold the origin in memory
    //set an object to make of the form {arr[i]: rank}
    const original = [...arr];
    const retArr = [];
    arr.sort((a,b) => a - b);
    const aObj = {};
    
    //loop arr and make aObj
    let iter = 1;
    for (let i = 0; i < arr.length; i++) {
        if (aObj[arr[i]] === undefined) {
            aObj[arr[i]] = iter;
            iter += 1;
        }
    }
    
    //loop original and push the ranks according to aObj
    for (let i = 0; i < original.length; i++) {
        retArr.push(aObj[original[i]]);
    }
    
    return retArr;
};

//edge cases: arr empty or 1,  negatives, all same num, all same num then last diff
//questions: limits on time/space? 

// [10,20,20,30,40]
//PSEUDO:
//const original = [...arr]
//const retArr = [];
//sort arr
//set iter = 1;
//set aObj = {10, 1}
//loop arr
//if (aObj[arr[i]] === undefined)
//aObj[arr[i]] = iter
//iter += 1

//loop original
//retArr.push aObj[original[i]]