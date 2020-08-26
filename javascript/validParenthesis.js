var isValid = function(s) {
    if (s.length === 0) {
        return true
    }
    const stack = [];
    
    let parenObj = {
        ')': '(',
        ']': '[',
        '}': '{'    
    }

    if (s.length > 1) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '[' || s[i] === '{' || s[i] === '(') {
            stack.push(s[i]);
        } else if (s[i] === ']' || s[i] === '}' || s[i] === ')') {
            if (stack.pop() === parenObj[s[i]]) {
                console.log(parenObj[s[i]])
                // stack.pop();
                continue;
            } else {
                return false;
            }
        }
        
        
    }
    
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
    } else {
        return false
    }
    
};

//edge cases:length 1 or 2, empty strings, 
//?'s limits on space/time, correct order? 

//{{}[[]]} v
//{{[[}]]} !v

//obj?
//loop through once to check if all opens and closes are equal if not ret false/
    
//all have to be equal, and all within an open have to close before its close

//set 6 more vars isopenPOpen = false ...
//loop through again and set isOpens to true on each iteration

//run nestedLoop and set isOpen to true and  counter to 1

//second round, use stack add openings, pop off end on closings looping whole s
// if stack is empty return true at end if not return false
