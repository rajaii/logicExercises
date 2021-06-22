//  from leetcode easy: https://leetcode.com/problems/add-digits

var addDigits = function(num) {
    //handle edge cases
    if (num.toString().length === 1) {
        return num;
    }
    
    //stringify and split num
    let n = num.toString().split('');
    
    //loop while n.length > 1 and nest a loop to add the individual digits returning     //count if the length of sum is 1 or resetting n if not
    while (n.length > 1) {
        let count = 0;
        for (let i = 0; i < n.length; i++) {
           count += parseInt(n[i]); 
        }
         if (count.toString().length === 1) {
           return count;
        } else {
         n = count.toString().split('');
        }
    }
};

//edge cases if doesnt' get to 1, 1 length to begin
//PSEUDO:

//let numStr = num.toString();
//let n = numStr.split();
//while (n.length > 1) {
// let count = 0;
// for (let i = 0; i < n.length; i++) {
//    count += parseInt(n[i]) 
//}
//  if (count.toString().length === 1) {
//    return count;
//} else {
//  n = count.toString().split();
//}
//}