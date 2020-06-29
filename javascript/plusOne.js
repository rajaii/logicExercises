//from Leetcode easy https://leetcode.com/problems/plus-one/submissions/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   
    if (digits[digits.length -1] === 9) {
        if (digits.length === 1) {
          return [1,0]     
        }
        else {
        digits[digits.length - 1] = 0;    
        for(let i = digits.length - 2; i >= 0; i--) {
            if (digits[i] === 9  && i != 0) {
                digits[i] = 0;
            } else if (i === 0 && digits[i] === 9) {
                digits[i] = 0;
                digits.splice(0,0,1)
            } 
            
            else {
                digits[i] += 1
                break
            }
        }}
    } else {
    digits[digits.length -1] += 1
    }
  
    return digits
    
    
    
};

//?'s: limitations on the input, 
//edge cases: 


//join array into a number
//add 1 to that number
//split that number into an array
//return the split array

//refactor (parseInt does not work on very large nums 2^53 highest)
//make an iteration counter = 0 and num = 0
//loop through newDig backwards and add newDig[i] * 10 ^ counter to num
//counter += 1
//continue??

//return same but put num in there

//no pseudo worked because of how JS handles large nums, just coded out the logic and debugged until it worked.  Can improve runtime, but memory was better than 99.49% of submissions!