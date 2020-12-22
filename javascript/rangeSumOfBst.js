//from leetcode easy: https://leetcode.com/problems/range-sum-of-bst/submissions/

var rangeSumBST = function(root, low, high) {
    //set the sum that will be added to and returned
    let sum = 0;
    
    //traverse BFT the BST and add to sum the vals as traversing
    let queue = [];
    let visited = [];
    queue.push(root);
    while (queue.length > 0) {
        if (!visited.includes(queue[0]) && queue[0] != null) {
            if (queue[0].val >= low && queue[0].val <= high) {
                sum += queue[0].val;
            } 
            queue.push(queue[0].left);
            queue.push(queue[0].right);
            visited.push(queue.shift())
        } else {
            queue.shift();
        }
    }
     
    return sum;
};

//edge cases: 1 node only;
//?'s: limits on time/space? does in the range include the low and high themselves?

//PSEUDO
//set sum = 0;
//traverse the list bst
//if (this.val > low && this.val < high):
//sum += this.val

//out of loop
//return sum