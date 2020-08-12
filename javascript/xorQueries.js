//From leetcode Medium: https://leetcode.com/problems/xor-queries-of-a-subarray/
let retArr = []
var xorQueries = function(arr, queries) {
    
    if (queries.length === 0) {
        let temp = []
        for (let i = 0; i < retArr.length; i++) {
            temp.push(retArr[i])
        }
        retArr.splice(0)
        return temp 
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

//============================================================================ FIRST PASS V:
//REFACTOR RECURSION TO LEARN THE VARIABLE PERSISTANCE BUG HAVE HAD IT TWICE  ^,  ALSO IMPROVE RUNTIME.


var xorQueries = function(arr, queries) {
    var retArr = []

    for (let i = 0; i < queries.length; i++) {
        xor = 0
       
        for(let j = queries[i][0]; j <= queries[i][1]; j++) {
            xor = xor ^ arr[j]
            
            if (j === queries[i][1]) {
                retArr.push(xor)
            }
        }
        
    }
    return retArr
    
    
    
    
    
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