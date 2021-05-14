//  from leetcode easy: https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square

var countGoodRectangles = function(r) {
    //  set the maxLen and count to iterate later
    let maxLen = 0;
    let count = 0;
    
    //  loop rectangles get the largest of the smaller sides
    for (let i = 0; i < r.length; i++) {
        if (Math.min(...r[i]) > maxLen) {
            maxLen = Math.min(...r[i]);
        }
    }
    
    //  loop rectangles and count the recs with sm === maxLen
    for (let i = 0; i < r.length; i++) {
        if (Math.min(...r[i]) === maxLen) {
            count += 1;
        }
    }
    
    
    return count;
};

//edge cases: 1 rectangle

//PSEUDO:
//let maxLen;
//loop rectangles get the largest of the smaller sides
//if sm < lg && sm > maxlen: maxLen = sm
//let count;
//loop rectangles and count the recs with sm === maxLen

//return count