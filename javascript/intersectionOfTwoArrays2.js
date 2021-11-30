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

