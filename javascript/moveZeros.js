//  from leetcode easy https://leetcode.com/problems/move-zeroes

var moveZeroes = function(nums) {
    //set counter variable 
    let counter = 0;
    
    //loop nums splicing the 0's out
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i,1);
            counter += 1;
            i -= 1;
        }
    }
    
    //loop to counter and push into nums
    for (let i = 0; i < counter; i++) {
        nums.push(0);
    }
    
    return nums;
};

//edge cases all 0?
//[0,0,0]
//set counter
//loop 
//if === 0 splice then inc counter i -= 1


///at end loop to counter and push a 0 into nums