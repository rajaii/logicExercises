//  from leetcode easy: https://leetcode.com/problems/merge-sorted-array/

var merge = function(nums1, m, nums2, n) {
    let j = 0;
    for (let i = m; i < nums1.length; i++) {
        nums1[i] += nums2[j];
        j += 1;
    }
    
    
    
    return nums1.sort((a,b) => a - b);
};