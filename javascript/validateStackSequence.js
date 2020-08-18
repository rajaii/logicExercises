// from leetcode Medium https://leetcode.com/problems/validate-stack-sequences/

var validateStackSequences = function(pushed, popped) {
    let poppedI = 0;
    let stack = [];
    
    for (let i = 0; i < pushed.length; i++) {
        stack.push(pushed[i]);
        while(stack.length > 0 && poppedI < popped.length && popped[poppedI] === stack[stack.length-1]) {
            stack.pop();
            poppedI += 1;
        }
    }
    return poppedI === popped.length
};

//?'s: limits on time/space
//edge cases: empty array, or 1 length, 1, duplicates values (see how placed)

//const stack = [] 
//let poppedI = 0;
//loop pushed
//if at end push the pushed and then pop all popped from stack if pop != popped[poppedI] return false
//push the pushed in stack in there until you hit popped[poppedI]
    //loop the popped 
    //if pop() === popped[poppedI] + increment poppedI until you hit one that is not === popped[poppedI] then break



//return true
//0 1 2 3
//pushed = [1,2,3,4,  5], popped = [4,3,5,  1,2]
//[1,2,3,4]
////[1,2,3]
////[1,2]
//[1,2,5]
//[1,2]