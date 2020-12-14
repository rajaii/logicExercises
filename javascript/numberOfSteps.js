//from leetcode easy: https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero

var numberOfSteps  = function(num) {
    //keep track of steps in memory
    let steps = 0;
    
    //use a while loop to div/sub on num until it hits 0 keeping track of steps
    while(num > 0) {
        if (num % 2 === 0) {
            num = num / 2;
            steps += 1;
        } else {
            num = num - 1;
            steps += 1;
        }
    }
    
    return steps
};

//edge cases:
//?'s: limits on time/space?


//PSEUDO:
//let steps = 0
//while (num > 0) 
//if (num % 2 === 0)
//num = num /2
//steps += 1
//else
//num = num - 1
//steps += 1

//return steps