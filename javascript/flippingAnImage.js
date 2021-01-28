//from leetcode easy https://leetcode.com/problems/flipping-an-image/

var flipAndInvertImage = function(A) {
    return a = A.map(ar => {
        ar.reverse();
        for (let i = 0; i < ar.length; i++) {
            if (ar[i] === 0) {
                ar[i] = 1;
            } else {
                ar[i] = 0;
            }
        }
        return ar;
    }); 
};


