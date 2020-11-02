//from leetcode medium https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent

var sumEvenGrandparent = function(root) {
    //set sum to 0 so can increment with even grandchildren
    let sum = 0;
    
    //run bft on tree incrmenting sum on even's grandchildren
    let queue = [];
    let visited = [];
    queue.push(root);
    while (queue.length > 0) {
        if (!visited.includes(queue[0])) {
            if (queue[0] != null) {
            queue.push(queue[0].right);
            queue.push(queue[0].left);
            if (queue[0].val % 2 === 0 && queue[0].left != null && queue[0].left.left != null) {
                sum += queue[0].left.left.val;
            }
            if (queue[0].val % 2 === 0 && queue[0].left != null && queue[0].left.right != null) {
                sum += queue[0].left.right.val;
            }
            if (queue[0].val % 2 === 0 && queue[0].right != null && queue[0].right.left != null) {
                sum += queue[0].right.left.val;
            }
            if (queue[0].val % 2 === 0 && queue[0].right != null && queue[0].right.right != null) {
                sum += queue[0].right.right.val;
            }
            }
            visited.push(queue.shift());
        } else {
            queue.shift();
        }
    }
    
    return sum
};

//edge cases: no grandsiblings, grandsiblings of some legs are null,
//?'s: limits on time/space? 

//PSEUDO:
//set sum = 0;
//bft skipping odd nodes
//if even node 
//(if clause to nor run on nulls)
//sum += node.left.left.val 
//sum += node.left.right.val
//sum += node.right.left.val
//sum += node.right.right.val

//return sum