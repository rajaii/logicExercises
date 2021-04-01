//  from leetcode medium https://leetcode.com/problems/counting-bits/

// var countBits = function(num) {
//     //  set the array that will save the counts
//     const counts = [];
    
//     //  loop num thus nested looping the binary string of i counting 1's and pushing the           //  counter into counts
//     for (let i = 0; i < num + 1; i++) {
//         let counter = 0;
//         for (let j = 0; j < i.toString(2).length; j++) {
//             if (j === i.toString(2).length - 1) {
//                 if (i.toString(2)[j] === '1') {
//                 counter += 1;
//             } counts.push(counter)
//             } else if (i.toString(2)[j] === '1') {
//                 counter += 1;
//             }
//         }
//     }
    
//     return counts;
// };

// O(N) V

var countBits = function(n) {
    //set the stack for lengths, string to concat huge bin into, retArr to push into and count
    const retArr = [];
    let count = 0;
    const stack = [];
    let binStr = '';
    let count2 = 0;
    
    // make the stack (because popping is constant and will keep the algo to o(n))
    for (let i = n; i >= 0; i--) {
        stack.push(i.toString(2).length);
    }
    
    
    //make the str by looping 0-n and concatting to binStr the binary string of i
    for (let i = 0; i < n + 1; i++) {
        binStr += i.toString(2);
    }
    
    //loop the string counting 1's until i === the last val in stack and then push count in           //retArr and reset the count and pop from the stack
    for (let i = 0; i < binStr.length; i++) {
        count2 += 1;
        if (count2 === stack[stack.length-1]) {
            if (binStr[i] === '1') {
                count += 1;
                stack.pop();
                retArr.push(count);
                count = 0;
                count2 = 0;
            } else {
                console.log(i)
                stack.pop();
                retArr.push(count);
                count = 0;
                count2 = 0;
            }
        } else {
            if (binStr[i] === '1') {
                count += 1;
                count2 += 0;
            } else {
                count2 += 0;
            }
        }
    }
    
    return retArr;
};

//?'s: limits on time/space?
//edge cases: 

//set counts = []
//loop to num
//set counter = 0;
//nested loop i.toString(2) counting '1's and incrementing counter
//counts.push(counter) at end of loop

//return counts

//REFACTOR to O(n)

//REFACTOR to O(n)
//set retArr = [];
//let count = 0
//set stack = []
//set binStr = '';

//make a stack of lengths (going backwards) of each bin:
//loop from n to 0 
//stack.push(i.toString(2).length)

//make a string of all the bins combined:
//loop from 0 - n
//binStr += i.toString(2);


//loop the string counting 1's and when reach stack[stack.length-1] - 1:
//stack.pop()
//retArr.push(count)
//count = 0;