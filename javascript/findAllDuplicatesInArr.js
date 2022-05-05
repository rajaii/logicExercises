//  from leetcode medium: https://leetcode.com/problems/find-all-duplicates-in-an-array/

var findDuplicates = function(nums) {
    //  set the memory
    const duplicates = [];
    const numObj = {};
    
    // make numObj
    for (let i = 0; i < nums.length; i++) {
        if (numObj[nums[i]] === undefined) {
            numObj[nums[i]] = [];
        }
    }
    
    //. populate numObj's arrays
    for (let i = 0; i < nums.length; i++) {
        numObj[nums[i]].push(nums[i]);
    }
    
    //  get the duplicates
    for (let key in numObj) {
        if (numObj[key].length === 2) {
            duplicates.push(numObj[key][0]);
        }
    }
    
    return duplicates
};

//PSEUDO: 
//make numObj of the form {nums[i]: []}
//loop nums and set the arr in there if undefined

//then push nums[i] into numObj[nums[i]]
//loop nums and do just that

//loop numsObj and if the length is 2 of numObj[key]
//push numObj[key][0] into retArr