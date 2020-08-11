//From leetcode Medium: https://leetcode.com/problems/xor-queries-of-a-subarray/
let retArr = [];

var xorQueries = function(arr, queries) {

    if (queries.length === 0) {
        let temp = retArr 
        return temp 
    }
    
    if (arr.length === 1) {
        //populate later
    }
    
    let query = queries[0];
    let rest = queries.splice(1);
    
    let xor = 0;
    for (let i = query[0]; i <= query[1]; i++) {
        xor = xor ^ arr[i]
    }
    retArr.push(xor)
    
    return xorQueries(arr, rest)
    
    
    
};

//edge cases: empty arr, or no queries
//?'s: limits on time/space? how to handle empty queries or arr? 

//recursion:
//base case if queries.length === 1:
//return retArr

//query = first element out of queries,
//save rest of queries in var to be passed into recursion
//xor = 0
//loop arr from query[0] - query[1]:
//xor = xor ^ arr[i]
//retArr.push(xor)
//xorQueries(arr, rest)