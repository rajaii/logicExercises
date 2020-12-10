//from leetcode easy https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/submissions/

var replaceElements = function(arr) {
    //loop array and replace arr[i] wth the max of right slice
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.max(...arr.slice(i+1))
    }
    
    //set last element to -1
    arr[arr.length - 1] = -1
    
    return arr;
};
