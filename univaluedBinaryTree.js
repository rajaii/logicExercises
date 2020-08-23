//https://leetcode.com/problems/univalued-binary-tree/


var isUnivalTree = function(root) {
    if (root === 0) {
        return 
    } 
    
    let queue = [root]
   

  while (queue.length > 0) {
    let item = queue.shift()
    let val = item.val
    

    if (item.left == null && item.right == null) {
      continue
    }
    if (item.left != null) {
      if (item.left.val != root.val) {
          return false
      } else {
      queue.push(item.left)
      }
    }
    if (item.right != null) {
      if (item.right.val != root.val) {
          return false
      } else {
      queue.push(item.right)
      }
    }
  }
    return true

    
};

//?'s: will all inputs be valid? limits on time? limits on space?
//edge cases: root = null; this.left === null; this.right === null; everything except last //right/left is same val all equal to 0 (root can be 0 if undefined and if everything else //is 
//0 is valid in this case)

//search the tree looking for not equal to root
//if so, continue loop, 
//outside of loop return true

//
//current = root
//while (current.left != null) 
//if (current.left.val != root.val || current.right.val != root.val)
//return false
//else 
//current.left = current

//[r1l2,r2]