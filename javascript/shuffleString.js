//from leetcode easy: https://leetcode.com/problems/shuffle-string/

var restoreString = function(s, indices) {
    //create array with length of indices
    const arr = [];
    
    //loop s and set array[indices[i]] to be s[i]
    for (let i = 0; i < s.length; i++) {
        arr[indices[i]] = s[i];
    }
    
    //return a string composed of the array elements joined
    return arr.join('');
};

//edge cases: length of 1 
//questions: limts on space/time? 

//set an empty array
//loop s and for each iteration arr[iindices[i]] = s[i] 
//return array.join('')