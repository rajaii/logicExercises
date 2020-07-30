//from leetcode easy: https://leetcode.com/problems/water-bottles/submissions/

var numWaterBottles = function(numBottles, numExchange) {
    console.log(`numBottles: ${numBottles}, numbechange:; ${numExchange}`)
    if (numBottles < numExchange) {
        return numBottles
    }
    
    let newBottleNum = Math.floor(numBottles / numExchange);
    let leftovers = numBottles % numExchange
    let newArg = newBottleNum + leftovers
    
    
    return (numBottles - leftovers) + numWaterBottles(newArg, numExchange)
};

//limits on space or time? limits on input nums?
//edge cases: excahnge > numBottles.  bottles or exchange === 0, numbottles === 1 and ex is 1


//numBottles / numExchange until numBottles < numexchange
//recursion

//Basecase:
//if numBottles < numExchange:
//return

//get to base case:
//let newBottleNum = numBottles // numExchange
//return newBottleNum+ numWaterBottles(newBottleNum, numExchange)

//didn't work had to hack the above because leftovers were not accounted for
