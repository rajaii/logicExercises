//from leetcode https://leetcode.com/problems/trim-a-binary-search-tree/

var trimBST = function(root, low, high) {
    const queue = [];
    const visited = []
    
    curr = root;
    queue.push(curr)
    while(queue.length > 0) {
        if (!visited.includes(curr.val)) {
        queue.push(curr)
        visited.push(curr.val)
        //may need logic to denote to only V if left and right exist
        //cut the node whil is not in the range low-high
        if (curr.left.val != null && curr.left.val >= low && curr.left.val <= high) {
        queue.push(curr.left)
        } else {
            curr.left = curr.left.right
            queue.push(curr.left)
            
        }
        if (curr.right.val >= low && curr.right.val <= high) {
        queue.push(curr.right)
        } else {
            curr.right = curr.right.left
            queue.push(curr.right)
        }
        curr = queue.shift()    
        } else {
            curr = queue.shift();
        }
        
    }
    
    return root
};

//?'s: limits on time/space?  
//edge cases: root = null, one root val and is out of bounds or whole tree is out of bounds

//traverse the tree bft (queue), if the current.val is less low or greater than high
//delete the node
//prev.left or right = curr.left or right
//also have to order the sub nodes to make sure ghigher val is on right
//curr.val = null??
//return root