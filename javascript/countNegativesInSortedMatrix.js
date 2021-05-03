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