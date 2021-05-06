// from leetcode easy: https://leetcode.com/problems/sum-of-unique-elements

var sumOfUnique = function(nums) {
    //  make an object of the form {nums[i]: count}
    const numCount = {};
    for (let i = 0; i < nums.length; i++) {
        if (numCount[nums[i]] === undefined) {
            numCount[nums[i]] = 1;
        } else {
            numCount[nums[i]] += 1;
        }
    }
    
    let sum = 0;
    
    //  loop numCount and add to the sum if count === 1
    for (let key in numCount) {
        if (numCount[key] === 1) {
            sum += parseInt(key, 10);
        }
    }
    
    return sum;
};

//edge cases: i in nums
//?'s: how do handle 1 in nums

//Pseudo:
//make an object of the form {nums[i]: count}
//loop the object
//if object[key] === 1:
//add to sum

//return sum