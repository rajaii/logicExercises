// from leetcode easy: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix

var countNegatives = function(g) {
    //  set counter in memory
    let counter = 0;
    
    //  loop the matrix and count negatives
    for (let i = 0; i < g.length; i++) {
        for (let j = 0; j < g[i].length; j++) {
            if (g[i][j] < 0) {
                counter += 1;
            }
        }
    }
    
    return counter;
};

//set counter = 0
//loop the matrix
//if g[i][j] < 0:
//counter += 1

//return counter


//refactor to make o(n):
//concatenate all sub arrays then loop once and count
//let a = a[0];
//loop a and concatenate all with a
// loop a again and count negatives 
//return count V


var countNegatives = function(g) {
    //  set counter in memory and an array to concat to (starting with g[0])
    let counter = 0;
    let a = g[0];
    
    //  loop the matrix and concat to a
    for (let i = 1; i < g.length; i++) {
       a = a.concat(g[i]);
    }
    
    //loop a and count negs
    for (let i = 0; i < a.length; i++) {
        if (a[i] < 0) {
            counter += 1;
        }
    }
    
    return counter;
};

