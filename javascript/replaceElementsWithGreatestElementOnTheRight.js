//from leetcode easy https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/submissions/

var replaceElements = function(arr) {
    //loop array and replace arr[i] wth the max of right slice
    for (let i = 0; i < arr.length; i++) {
        let max = 0;
        let a = arr.slice(i+1);
        for (let j = 0; j < a.length; j++) {
            if (a[j] > max) {
                max = a[j]; 
            }
        }
        arr[i] = max;
    }
    
    //set last element to -1
    arr[arr.length - 1] = -1
    
    return arr;
};
