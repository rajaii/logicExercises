//  from leetcode easy: https://leetcode.com/problems/find-the-highest-altitude/

var largestAltitude = function(gain) {
    //  set the counter an max in memory
    let max = 0;
    let alt = 0;
    
    //  loop gain incrementing count with gain[i] and setting max if the sum is           //  larger than max
    for (let i = 0; i < gain.length; i++) {
        if (gain[i] + alt > max) {
            max = gain[i] + alt;
            alt += gain[i];
        } else {
            alt += gain[i];
        }
        
        
    }
    
    return max;
};


//edge cases: 1 n and n negative, 

//PSEUDO
//set count = 0;
//set max = 0;
//looop gain
//add gain[i] to count
//if gain[i] + count > max:
    //max = gain[i] + count

//return max