//  from leetcode easy: https://leetcode.com/problems/minimum-distance-between-bst-nodes/

var minDiffInBST = function(root) {
    //handle edge cases:
    // if (root === null) {
    //     return 0;
    // }
    //  set min in memory
    let min = Infinity;
    
    //  traverse the tree checking and setting min as it progresses
    const queue = [];
    const visited = [];
    const vals = [];
    let cur = root;
    queue.push(cur);
     while (queue.length > 0) {
        if (!visited.includes(queue[0]) && queue[0] !== null) {
            queue.push(cur.left);
            queue.push(cur.right);
            vals.push(cur.val);
            visited.push(queue.shift());
            cur = queue[0];
        } else {
            queue.shift();
            cur = queue[0];
        }
     } 
    
    for (let i = 0; i < vals.length; i++) {
        for (let j = i+1; j < vals.length; j++) {
            if (vals[i] - vals[j] > 0 && vals[i] - vals[j] < min) {
                min = vals[i] - vals[j];
            } else if (vals[j] - vals[i] > 0 && vals[j] - vals[i] < min) {
                min = vals[j] - vals[i];
            }
        }
    }
    
    
    
    return min;
};

//edge cases: root === null, 
//?'s: limits on time/space? how to handle null root

//PSEUDO
//let min = Infinity;
//traverse the tree bft
//push each val into a vals array
//double loop vals running subtraction keeping smallest positive diff

//refactor to improve runtime
//sort array.

//loop and keep popping and subtracting from array[.length - 1] and track min as it //progresses


var minDiffInBST = function(root) {
    let min = Infinity;
    
    //  traverse the tree checking and setting min as it progresses
    const queue = [];
    const visited = [];
    const vals = [];
    queue.push(root);
     while (queue.length > 0) {
        if (!visited.includes(queue[0]) && queue[0] !== null) {
            queue.push(queue[0].left);
            queue.push(queue[0].right);
            vals.push(queue[0].val);
            visited.push(queue.shift());
        } else {
            queue.shift();
        }
     } 
    
    //  sort vals
    vals.sort((a,b) => a - b);
    
    //  loop vals popping and minusing the pop from the new last element; track min
    while (vals.length > 0) {
        if (vals[vals.length - 1] - vals[vals.length - 2] < min) {
            min = vals[vals.length - 1] - vals[vals.length - 2];
            vals.pop();
        } else {
            vals.pop()
        }
    }
    
    
    
    return min;
};