//  from leetcode easy https://leetcode.com/problems/calculate-money-in-leetcode-bank/

var totalMoney = function(n) {
    //  set the monday count, dollars, and prev in memory for iteration
    let monCount = 1;
    let dollas = 0;
    let prev = 0;
    let count = 0;
    
    //  loop from 1 to n + 1 counting dollars and iterating moncount on multiples of     //  8 while also resetting prev on multiples of 8
    for (let i = 1; i < n + 1; i++) {
        if ((i + count) % 8 === 0) {
            monCount += 1;
            dollas += monCount;
            prev = monCount;
            count += 1;
        } else {
            dollas += prev + 1;
            prev += 1;
        }
    }
    
    return dollas;
    
    
};

//edge cases:

//PSEUDO:
//set monCount = 0;
//set dollas = 0;
//set prev = 0;
//loop to n starting at 1!!!!!!!!!!!!!!!!


//if (i % 8 === 0):
//monCount += 1;
//dollas += monCount + 1
//prev = monCount + 1


//else:
//dollas += prev + 1
//prev = prev + 1


//return dollas;