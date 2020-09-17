//from leetcode easy https://leetcode.com/problems/unique-number-of-occurrences/

var uniqueOccurrences = function(arr) {
    //make an object to tag the counts of the integers
    let arrObj = {};
    for (let i = 0; i < arr.length; i++) {
        if (arrObj[arr[i]] === undefined) {
            arrObj[arr[i]] = 0;
        } else {
            arrObj[arr[i]] += 1;
        }
    }
    
    
    let vals = Object.values(arrObj)
    for (let i = 0; i < vals.length; i++) {
        for (let j = i + 1; j < vals.length; j++) {
            if (vals[i] === vals[j]) {
                return false;
            }
        }
    }
    
    return true;
    
};

//?'s: limits on time'space?
//edge cases? arr.length === 1, 

//loop arr
//if arrObj[arr[i]] === undefined => arrObj[arr[i]] = 0
//else arrObj[arr[i]] += 1
//{'1':3,'2':2,'3':1} [1,2,2,1,1,3] [3,2,1][3,2,1]
//brute force
//loop Object.values(arrObj) twice checking if arr[i] ===arr[j]
//if so return false
//outside of loop return true

//write code then check and account logic for edge cases