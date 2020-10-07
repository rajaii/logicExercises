//from leetcode easy https://leetcode.com/problems/third-maximum-number/

var thirdMax = function(nums) {
    //handle edge cases
    if (nums.length === 1) {
        return nums[0];
    } else if (nums.length === 2) {
        return Math.max(...nums);
        //code to run if edges don't hit
    } else {
        //get index of max value and remove that value from the array saving it as max1
        //for max2 and max3 run the same logic but preceded by a while loop that will run
        //only if there are duplicates of max1 or max2, thus removing the duplicates before 
        //running the logic to slice the max and save as max2 and max3
        let maxIndex = nums.indexOf(Math.max(...nums));
        let max1 = nums.splice(maxIndex, 1)[0];
        //2
        maxIndex = nums.indexOf(Math.max(...nums));
        while (nums[maxIndex] === max1) {
            nums.splice(maxIndex, 1);
            if (nums.length === 0) {
                return max1
            }
            maxIndex = nums.indexOf(Math.max(...nums));
        }
        //logic needs to run if array emptied from dupes
        let max2 = nums.splice(maxIndex, 1)[0];
        if (nums.length === 0) {
            return max1
        }
         
        maxIndex = nums.indexOf(Math.max(...nums));
        while (nums[maxIndex] === max2) {
            nums.splice(maxIndex, 1);
            if (nums.length === 0) {
            return max1;
        }
            maxIndex = nums.indexOf(Math.max(...nums));
        }
        //logic needs to run if array emptied from dupes
        let max3 = nums.splice(maxIndex, 1)[0];
        return max3;
    }
};



//?'s: limits on space? limits on inputs?
//edge cases: nums.length < 3 || distinct amt of nums < 3, array emptied from duplicates //being spliced, array length huge but all same value


//if nums.length === 1
//return nums[0]

//else if nums.length === 2
//return Math.max(...nums)

//else
//get indexof max of nums
//slice that out and save as max1

//get indexof max of nums
//while (nums[indexOf(Math.max(...nums))] === max1)
//slice that out

//nums[indexOf(Math.max(...nums))] != max1 at this point so V
//slice nums[indexOf(Math.max(...nums))] out and save as max2

//get indexof max of nums
//while (nums[indexOf(Math.max(...nums))] === max2)
//slice that out

//nums[indexOf(Math.max(...nums))] != max2 at this point so V
//slice nums[indexOf(Math.max(...nums))] out and save as max3

//return max3
