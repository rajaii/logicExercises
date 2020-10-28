//from leetcode: easy: https://leetcode.com/problems/sort-array-by-parity-ii/

var sortArrayByParityII = function(a) {
    //set an array of the right length with empty values to add into
    let retArr = [];
    retArr.length = a.length;
    
    //loop a once pushing into retArr[j] if they are even and incrementing j by 2, then same       //for odds in another loop
     let j = 0;
     for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 0) {
            retArr[j] = a[i];
            j += 2;
        } 
    }
    j = 1;
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            retArr[j] = a[i];
            j += 2; 
        } 
    }
    return retArr;
   
};
