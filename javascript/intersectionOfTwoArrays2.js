//  from leetcode easy: https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
    //set retArr and shorter/longer 
    const retArr = [];
    let short;
    let long;
    if (nums1.length <= nums2.length) {
        short = nums1;
        long = nums2;
    } else {
        short = nums2;
        long = nums1;
    }
    
    //loop longer and push into retArr ones in common
    for (let i = 0; i < long.length; i++) {
        if (short.includes(long[i])) {
            retArr.push(long[i]);
            short.splice(short.indexOf(long[i]), 1);
        }
    }
    
    return retArr;
};

//set retArr
//loop the longer one
//if shorter.includes(longer[i]) => push into retArr remove from short
//return retArr

//refactor after study

var intersect = function(nums1, nums2) {
    //set retArr and shorter/longer 
    const retArr = [];
    
    const m = new Map();
    //make a map of long and then check using get 
    for (let i = 0; i < nums1.length; i++) {
        m.set(nums1[i], m.get(nums1[i]) + 1 || 1);
    }
   
    for (let i = 0; i < nums2.length; i++) {
        if (m.get(nums2[i]) > 0) {
            retArr.push(nums2[i])
            m.set(nums2[i], m.get(nums2[i]) -1)
        }
    }
    
    return retArr;
};

//or with object

var intersect = function(nums1, nums2) {
    //set retArr and shorter/longer 
    const retArr = [];
    
    const o = {};
    //make a map of long and then check using get 
    for (let i = 0; i < nums1.length; i++) {
        o[nums1[i]] = o[nums1[i]] + 1 || 1;
    }
 
    for (let i = 0; i < nums2.length; i++) {
        if (o[nums2[i]] > 0) {
            retArr.push(nums2[i]);
            o[nums2[i]] -= 1;
        }
    }
   
    
    return retArr;
};
