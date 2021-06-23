//  from leetcode easy: https://leetcode.com/problems/intersection-of-two-arrays

var intersection = function(nums1, nums2) {
    //  find arr with larger length
    let big;
    let sm;
    if (nums1.length >= nums2.length) {
        big = nums1;
        sm = nums2;
    } else {
        big = nums2;
        sm = nums1;
    }
    
    //  loop bigger and find elements that intersect
    let intersection = [];
    for (let i = 0; i < big.length; i++) {
        for (let j = 0; j < sm.length; j++) {
            if (big[i] === sm[j] && !intersection.includes(big[i])) {
                intersection.push(big[i]);
                break;
            }
        }
    }
    
    return intersection;
};

//?: Define intersection?  Do they have to be contiguous?

//Pseudo:
//find arr with larger length
//loop that array (double looping smaller one) and check for overlaps and push into //intersection
//return intersection