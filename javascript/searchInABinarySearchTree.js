//from leetcode easy: https://leetcode.com/problems/search-in-a-binary-search-tree/submissions/

var searchBST = function(root, val) {
    //set variable that will be returned
    let subtree;
    
    //run BFT searching for val and setting subtree if val is found
    let queue = [];
    queue.push(root);
    let visited = [];
    while (queue[0] != undefined) {
     if (!visited.includes(queue[0])) {
         
         if (queue[0].val === val) {
             return queue[0];
         }
         
         if (queue[0].left != null) { 
             if (queue[0].left.val === val) {
            return queue[0].left;
         } 
         queue.push(queue[0].left); 
         } 
        
         if (queue[0].right != null) {
            if (queue[0].right.val === val) {
                return queue[0].right;
         }    
         queue.push(queue[0].right);
         }
            
        visited.push(queue.shift());
         
     } else {
         queue.shift()
     }    
    }
    
    return null;
};

//Edge cases: null tree or root only in tree, 
//?'s: limits on time/space/inputs? can val be null?

//PSEUDO:

//set subtree;
//run bft searching for val
//if the current node is === val:
//subtree = node (and all subnodes)
// break the traversaal

//if subtree === undefined => return null
//else return subtree