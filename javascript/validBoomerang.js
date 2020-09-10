//from leetcode easy: https://leetcode.com/problems/valid-boomerang/

var isBoomerang = function(p) {
    if ((p[0][0] === p[1][0] && p[0][1] === p[1][1]) || (p[1][0] === p[2][0] && p[1][1] === p[2][1]) || (p[0][0] === p[2][0] && p[0][1] === p[2][1])) {
        return false
    }
    let slope1 = (p[1][1] - p[0][1]) / (p[1][0] - p[0][0])
    let slope2 = (p[2][1] - p[0][1]) / (p[2][0] - p[0][0])
    let slope3 = (p[2][1] - p[1][1]) / (p[2][0] - p[1][0])
    
    if (slope1 === slope2 && slope2 === slope3) {
        return false
    } else {
        return true
    }
    
};

//edge cases: 
//?'s: 

//if points[0] === ppoints[1] || points[1] === points[2] || p0 === p[3] ret false accounted //for below
//slope change in y / change in x
//if slope of p[0],p[1] === p[0], p[2]  and p[1], p[2]return false
//else return true