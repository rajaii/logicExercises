//From LeetCode Medium difficulty https://leetcode.com/problems/divide-two-integers/
//their test had an error, handled it with first else if else if (dividend === -2147483648)...
//dividing that gets you 2147483648 but for some reason their tests gave 2147483647.



/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let retVal = 0
    let counter = Math.abs(dividend)
    if (divisor === 0) {
       return undefined 
    
     } else if (dividend === -2147483648 && divisor === -1) {
        return 2147483647
    } else if (divisor === dividend) {
         return 1
    } else if (dividend === 0) {
        return 0
    }  else if (divisor === 1)  {
        return dividend
    } else if (divisor === -1 && dividend < 0) {
        return Math.abs(dividend)
    } else if (divisor === -1 && dividend > 0) {
        return dividend - dividend - dividend
    } else if (dividend < 1 && divisor === -1) {
        return Math.abs(dividend)
    }  else {
    
    let retVal = 0
    counter = 0
    while (retVal <= Math.abs(dividend) - Math.abs(divisor)) {
        retVal += Math.abs(divisor)
        counter += 1
    } 
    if (divisor > 0 && dividend > 0 || divisor < 0 && dividend < 0) {
        
        return counter
    } else if (divisor < 0 && dividend > 0 || divisor > 0 && dividend < 0) {
        return counter - counter - counter
    } 
    
    
    
    
}
}; 