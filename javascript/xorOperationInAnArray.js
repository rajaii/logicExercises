// from leetcode easy: https://leetcode.com/problems/xor-operation-in-an-array/

var xorOperation = function(n, start) {
    let xorArr = []
    for (let i = 0; i < n; i++) {
        xorArr.push(start + 2 * i)
    }
    let xor = 0;
    for (let i = 0; i < n; i++) {
        xor = xor ^ xorArr[i] 
    }
    
    return xor
};
    
//?'s limit on time/space? are inputs always positive? 0?
//edge cases: 0 n or start, ngatives, 
    
//let arr = []
//loop through n
//arr.push(start + 2 * i)

//reduce array to bitwise operators
    

