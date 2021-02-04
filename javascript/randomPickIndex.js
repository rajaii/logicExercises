//from leetcode medium https://leetcode.com/problems/random-pick-index/

var Solution = function(nums) {
    this.nums = nums;
     
    this.pick = function(target) {
        const indexs = [];
        for(let i = 0; i < this.nums.length; i++) {
            if (this.nums[i] === target) {
                indexs.push(i);
            }
        }
        return indexs[Math.floor(Math.random() * indexs.length)];
    }
};


/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

//Edge cases: length 1, all same num, 
//?'s: limits on time?

//Pseudo:
//loop nums and make a new array with i if nums[i] === target 
//return Math.floor(Math.random() * newArr.length)

//