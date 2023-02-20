//  from leetcode easy: https://leetcode.com/problems/invert-binary-tree/

var invertTree = function(root) {
  if (root === null) {
      return root
  }
  const queue = [root];
  const visited = [];

  while (queue.length > 0) {
      if (queue[0].left) {
          queue.push(queue[0].left);
      }
      if (queue[0].right) {
          queue.push(queue[0].right);
      }
      
      if (!visited.includes(queue[0])) {
          const tempRight = queue[0].right;
          queue[0].right = queue[0].left;
          queue[0].left = tempRight;
          visited.push(queue[0]);
      }

      queue.shift();
  }

  console.log(root)

  return root;
};

//traverse BFT quque
//set cur.left to cur.right vice versa

//using recursion:

var invertTree = function(root) {
  if (root === null) {
      return null
  }
  
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  invertTree(root.left);
  invertTree(root.right);
  return root;
  
};