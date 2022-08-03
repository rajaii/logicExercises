// from leetcode easy: https://leetcode.com/problems/root-equals-sum-of-children/

var checkTree = function(root) {
  if (root.val === (root.left.val + root.right.val)) {
      return true;
  }  
    
  return false;
};