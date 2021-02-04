//from leetcode: easy https://leetcode.com/problems/peak-index-in-a-mountain-array

var peakIndexInMountainArray = function(arr) {
    return arr.indexOf(Math.max(...arr));
};