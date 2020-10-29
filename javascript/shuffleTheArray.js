//from leetcode easy https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
    //split nums in half
    let num1 = nums.slice(0,n);
    let num2 = nums.slice(n);
    
    //loop num1 and push num1[i] then num2[i] into retArr
    let retArr = [];
    for (let i = 0; i < num1.length; i++) {
        retArr.push(num1[i]);
        retArr.push(num2[i]);
    }
    
    return retArr; 
    
};

//edge cases:
//?'s:limits on time/space?  

//split the array in two halves
//loop one half and then push a1[i] then a2[i] into retArr
//return retArr