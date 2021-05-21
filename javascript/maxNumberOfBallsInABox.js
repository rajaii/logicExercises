//  from leetcode: easy https://leetcode.com/problems/maximum-number-of-balls-in-a-box/

var countBalls = function(l, h) {
    //  set the object to count dig sums
    const count = {};
    
    // loop from low to high summing digs and counting in countObj
    for (let i = l; i < h + 1; i++) {
        let s = i.toString().split('').reduce((a,c) => a + parseInt(c), 0);
        if (count[s] === undefined) {
            count[s] = 1;
        } else {
            count[s] += 1;
        }
    }
    
    return Math.max(...Object.values(count))
};

//PSEUDO:
//count = {};
//loop from lowLimit to highLimit 
//set count to be of form {sumof i digs: count}

//return Math.max(...Object.values(count))