//from leetcode https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers

var getNoZeroIntegers = function(n) {
    //set the memory to hold nums without 0's
    const nums = []
    for (let i = 0; i < n; i++) {
        let hasZ = false;
        let s = i.toString();
        for (let j = 0; j < s.length; j++) {
            if (s[j] === '0') {
                hasZ = true;
                break;
            }
        }
        if (!hasZ) {
            nums.push(i);
        }
    }
    
    //loop to see if nums twice can === n
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i] === n) {
            return [nums[i], nums[i]]
        }
    }
    
    //loop to  nums and check if the nums add to n
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === n) {
              return [nums[i], nums[j]]
            }
        }
    }
};

//PSEUDO
//cons nums = []
//loop to n
//pick all numbers that have no 0's
//set hasZ = false;
    //stringify and double loop if any 0's hasZ = true;
    //break;

//out of nested in mother loop:
//if (!hasZ) {
//nums.push(i)
//}

//now double loop nums j = i + 1
// if (nums[i] + nums[j] === n) {
//return [nums[i], nums[j]]
//}