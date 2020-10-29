//from leetcode easy https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
    //loop nums and push num[i then num[n+i] into retArr
    let retArr = [];
    for (let i = 0; i < n; i++) {
        retArr.push(nums[i]);
        retArr.push(nums[n+i]);
    }
    
    return retArr;
       
};

//edge cases:
//?'s:limits on time/space?  

//split the array in two halves
//loop one half and then push a1[i] then a2[i] into retArr
//return retArr

//refactor
//loop to n
//push into retArr nums[i]
//push into retARr nums[n+i]

//edge cases:
//?'s:limits on time/space?  

//split the array in two halves
//loop one half and then push a1[i] then a2[i] into retArr
//return retArr