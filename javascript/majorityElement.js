//from leetcode easy https://leetcode.com/problems/majority-element

// var majorityElement = function(nums) {
//     //set the majority meter to check against and the counter
//     const nOver2 = nums.length / 2;
//     let counter = 0;
    
//     //sort nums to ensure everything is consecutive and no jumping around on numbers
//     nums.sort((a,b) => a - b);
    
//     //loop nums checking to see if nums[i] is the majority element by counting and checking     //counter against majority meter
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i+1] !== nums[i]) {
//         counter += 1;
//         if (counter > nOver2) {
//         return nums[i];
//         } else {
//         counter = 0;
//         continue;
//         }
//         } else {
//             counter += 1;
//         }
//     }
    
// };

//edge cases: n === 1, 
//?'s: limits on time/space? only numbers in nums?
//[1,1,1,2,2,2,2]
//PSEUDO:
//let nOver2 = nums.length /2;
//let counter = 0;
//nums.sort((a,b) => a - b)
//loop nums
//if (nums[i+1] !== nums[i]) {
//counter += 1
//if (counter > nOver2) {
//return nums[i]
//} else {
//counter = 0
//continue
//}} else {
//counter +=1
//}

//refactor to o (n) runtime:

var majorityElement = function(nums) {
    const numCounts = {}
    //smake an object of the form {num: count}
    for (let i = 0; i < nums.length; i++) {
        if (numCounts[nums[i]] !== undefined) {
            numCounts[nums[i]] += 1;
        } else {
            numCounts[nums[i]] = 1;
        }
    }
    
    
    const target = Math.max(...Object.values(numCounts));
    for (let key in numCounts) {
        if (numCounts[key] === target) {
            return key
        }
    }
};
