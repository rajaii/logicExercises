//  from leetcode easy https://leetcode.com/problems/matrix-diagonal-sum/


var diagonalSum = function(m) {
    //set the return array
    const toSum = [];
    let mid;
    let j = 0;
    let k = m.length - 1;
    if (m.length % 2 !== 0) {
        even = false;
        mid = Math.floor(m.length / 2);
    }
    //loop twice tagging the ones to push into the array we will reduce and return
    for (let i = 0; i < m.length; i++) {
        toSum.push(m[i][i]);
        if (j === mid && !even) {
            j++;
            k--;
            continue;
        }
        toSum.push(m[k][j]);
        k--;
        j++;    
    }
    
    return toSum.reduce((a,c) => a+c, 0)
};

//PSEUDO:
//set toSum = []
//loop twice
//let j = 0;
//for (let i = 0; i < m.length; i++) {
//toSum.push(m[i][j])
//j += 1;
//}

//do backwards and if odd length skip middle one
//let even = true;
//let mid;
//if (m.length % 2 !== 0) {
//even = false;
//mid = Math.floor(m.length / 2);
//}
//j = m.length - 1;
//for (let i = m.length - 1; i >= 0; i--) {
//if (j === mid && !even) {
// continue;
//}
//toSum.push(m[i][j])
//j--
//}


//return toSum.reduce((a,c) => a+c, 0)