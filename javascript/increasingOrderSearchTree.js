//  from leetcode easy: https://leetcode.com/problems/increasing-order-search-tree/

var increasingBST = function(root) {
    //  traverse and push into an array all the values of the bst
    const arr = [];
    const queue = [root];
    const visited = [];
    
    while (queue.length > 0)  {
        if (!visited.includes(queue[0]) && queue[0] !== null) {
            queue.push(queue[0].left);
            queue.push(queue[0].right);
            visited.push(queue[0]);
            arr.push(queue.shift().val);
            
        } else {
            queue.shift();
        }
        
    }
    
    //  sort arr and make newTree with arr[0] as head
    arr.sort((a,b) => a - b);
    const newTree = new TreeNode(arr[0]);
    
    //  append all the rights by looping to arr.length from 1 and setting rights
    let cur = newTree
    for (let i = 1; i < arr.length; i++) {
        cur.right = new TreeNode(arr[i]);
        cur = cur.right
    }

    return newTree;
};

//edge cases:  empty tree, tree with 2 only

//PSEUDO:
//traverse and push into an array all the vals
//sort the array
//declare a new tree with arr[0] as head
//let i = 1;
//let cur = newTree;
//while (cur === null && i < arr.length) {
//newTree.right = new TreeNode(arr[i]);
//cur = newTree.right;
//i += 1;
//}
