//from leetcode easy https://leetcode.com/problems/hamming-distance/


var hammingDistance = function(x, y) {
    //set the hammingDistance in memory
    let hammingDistance = 0;
    
    //make x and y into binary strings of equal length
    let xBin = x.toString(2);
    let yBin = y.toString(2);
    
    if (xBin.length < yBin.length) {
        let distX = yBin.length - xBin.length;
        for (let i = 0; i < distX; i++) {
            xBin = '0' + xBin; 
        }
    } 
    
    if (yBin.length < xBin.length) {
        let distY = xBin.length - yBin.length;
        for(let i = 0; i < distY; i++) {
            yBin = '0' + yBin;
        }
    }
    
    //loop and check which values are not equal incrementing hammingDistance as they are !=
    for (let i = 0; i < yBin.length; i++) {
        if (yBin[i] != xBin[i]) {
            hammingDistance += 1;
        }
    }
    
    return hammingDistance;
};

//edge cases: 0 or 1 (leading 0's)
//"?'s: limits on time/space?

//Psuedo: 

//set hammingDistance = 0;
//make x and y binary strings
//put leading 0's on the smaller length to make them equallen
//loop one str checking if the values are equal when they arent increment hammingDistance