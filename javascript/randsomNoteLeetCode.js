//  from leetcode easy: https://leetcode.com/problems/ransom-note/

var canConstruct = function(note, magazine) {
    //  split them up so can manipulate and run arr method on them
    const stack = note.split('');
    const mag = magazine.split('');
    
    //  loop while the stack has letters, and check if they exist in mag and remove     //if so to avoid using them twice
    while (stack.length > 0) {
    if (!mag.includes(stack[stack.length - 1])) {
    return false;
    } else {
    mag.splice(mag.indexOf(stack.pop()), 1); 
    }
    }
    

    return true;
};

//edge cases: note.len > magazine.len, 
//?:  can duplicate letters in magazine be used each time once in note? do they have //to be contiguous letters used to construct?

//PSEUDO:
//const stack = note.split('');
//const mag = magazine.split('');
//while (stack.length > 0) {
//if (!mag.includes(stack[stack.length - 1]) {
//return false;
//} else {
//mag.splice(magazine.indexOf(stack.pop(), 1))
//}
//}

//return true;