//  from leetcode easy:  https://leetcode.com/problems/second-largest-digit-in-a-string

var secondHighest = function(s) {
    //  split s and set nums to empty arr to push into
    const a = s.split('')
    const nums = [];
    
    //  loop a and non-duplicate numbers into nums
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(parseInt(a[i])) && !nums.includes(parseInt(a[i]))) {
            nums.push(parseInt(a[i]));
        }
    }
    
    //  sort nums and stringify the second to last item in nums and return it
    if (nums.length < 2) {
        return -1;
    }
    nums.sort((a,b) => a - b);
    const ans = nums[nums.length - 2]
    return ans.toString();
    
};

//edge cases: no numbers, duplicates at ends 
//?'s: returning as a string?

//PSEUDO:
//const a = s.split('')
//const nums = [];

//loop a and if parseInt(a[i]) !== NaN && !nums.incudes(parseInt(a[i])):
//nums.push(parseInt(a[i]))

//nums.sort((a,b) => a - b);
//const ans = nums[nums.length - 2]
//return ans.toString();