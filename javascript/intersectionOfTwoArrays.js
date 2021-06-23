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

//refactor to improve runtime:
//sort both arrays
//remove duplicates:
//set num1b and num2b
//loop num1 and num2 and push into the b's if num1b[i - 1] !== undefined && num1b[i //- 1] !== num1b[1]

//set intersections
//concat the arrays, sort the concatenated array and remove the duplicates of the //sorrted, concatenated array by doint the above but pushing into intersections

//return intersections O(n log n) time

var intersection = function(nums1, nums2) {
    //  sort both arrays
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    
    //  remove duplicates
    let nums1b = [];
    let nums2b = [];
    for (let i = 0; i < nums1.length; i++) {
        if (i === 0) {
            nums1b.push(nums1[i]);
        }
        if (nums1[i - 1] !== undefined && nums1[i - 1] !== nums1[i]) {
            nums1b.push(nums1[i]);
        }
    }
    
    for (let i = 0; i < nums2.length; i++) {
        if (i === 0) {
            nums2b.push(nums2[i]);
        }
        if (nums2[i - 1] !== undefined && nums2[i - 1] !== nums2[i]) {
            nums2b.push(nums2[i]);
        }
    }
     
    //  concat the sorted and sort and remove duplicates
    let intersection = [];
    let whole = nums1b.concat(nums2b);
    whole.sort((a,b) => a - b);
    
    for (let i = 0; i < whole.length; i++) {
        if (whole[i - 1] !== undefined && whole[i - 1] === whole[i]) {
            intersection.push(whole[i]);
        }
    }
    
    return intersection;
};
