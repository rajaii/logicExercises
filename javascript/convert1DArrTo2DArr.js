//from leetcode easy:https://leetcode.com/problems/convert-1d-array-into-2d-array

var construct2DArray = function(o, m, n) {
    if (o.length !== m * n) {
        return [];
    }
    //set the needed memory
    let count = 0;
    const twoD = [];
    o.reverse();
    
    //loop to m with a nested for loop to n pushing all values into subarrays and then pushing that into retARR
    
    while (count < m) {
    let nested = [];
        for (let i = 0; i < n; i++) {
            nested.push(o.pop());
        }
        twoD.push(nested);  
        count += 1;
    }
         
    return twoD;
    
};

//PSEUDO
//set count = 0;
//set twoD = [];
//reverse o so the inner pop is constant time
//loop to m with a nested for loop to n pushing all values into subarrays and then pushing that into retARR

//in while out of for increm,entn count
//out of loop return twoD