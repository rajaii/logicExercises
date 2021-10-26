//  from leetcode easy: https://leetcode.com/problems/maximum-average-subarray-i/

var findMaxAverage = function(nums, k) {
    //set max
    let max;
    
    //find inital max val
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    max = sum / k;
    sum = 0;
    
    //  double loop nums until i < nums.length - (k-1) and check to see if avg > max
    //  if so reset max
    for (let i = 1; i < (nums.length - k + 1); i++) {
        for (let j = i; j < i + k; j++) {
            sum += nums[j];
        }
        if ((sum / k) > max) {
            max = (sum / k);
        }
        sum = 0;
     }
    
    return max
};


//edge cases: nums.length === 0 or 1, k >= nums.length
//pseudo:

//set max;
//loop from 0 to k and take agv and set to max

//double loop nums until i < nums.length - (k-1) and check to see if avg > max
//if so reset max

//return max

//  Round 2 refactor post education:

var findMaxAverage = function(nums, k) {
    //find inital max val
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    //set an array with the first sum
    const sums = [sum]
    
    //loop nums adding nums[i+k] to sum and subtracting nums[i] from sum and pushing result into sums
    for (let i = 0; i < (nums.length - k); i++) {
        sum += nums[i + k];
        sum -= nums[i]
        sums.push(sum);
    }
    
    return Math.max(...sums) / k;
};