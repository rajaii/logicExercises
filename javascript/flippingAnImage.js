//from leetcode easy https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function(A) {
    //reverse each row
    let a = A.map(ar => ar.reverse())
    
    //flip the bits
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] === 0) {
                a[i][j] = 1;
            } else {
                a[i][j] = 0;
            }
        }
    }
    
    return a
};