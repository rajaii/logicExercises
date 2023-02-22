//  from leetcode easy: https://leetcode.com/problems/binary-tree-preorder-traversal/

var preorderTraversal = function(root) {
    
  const ret = [];
  const stack = [];
  
  let cur = root;
  while (stack.length || cur) {
      while (cur) {
          ret.push(cur.val);
          stack.push(cur);
          cur = cur.left;
      }

      
      cur = stack.pop();
      if (cur) {
          cur = cur.right;
      }
      
  }

  return ret;

};