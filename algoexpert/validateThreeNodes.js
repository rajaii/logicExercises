//HARD

//solution 1 o(3d) || 0(d) time where d is distance of nodeOne and nodeThree o(d) space recusrsion (call stack space):
function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    //set the variables and boolean needed 
    let mom = null;
    let skip = false;
    let other = null;
  
    function search (motherNode, nodeToFind) {
      if (motherNode === null) {
        return false;
      }
  
      if (motherNode === nodeToFind) {
        return true;
      }
       
      return search(motherNode.left, nodeToFind) || search(motherNode.right, nodeToFind);
      
    }
    
    //traverse starting at nodeOne and check if hit nodeTwo
    if (search(nodeOne, nodeTwo)) {
      skip = true;
      mom = nodeOne;
      other = nodeThree;
    }
  
    //if !skip traverse starting at nodeThree and check if hit nodeTwo
    if (!skip) {
      if (search(nodeThree, nodeTwo)) {
        mom = nodeThree;
        other = nodeOne;
      }
    }
  
    //if mom hasn't set answer is false
    if (!mom) {
      return false;
    }
  
    //traverse starting from nodeTwo and see if we hit other
    if (search(nodeTwo, other)) {
      return true;
    }
    
    return false;
  }

  //solution 2 o(h) where h is height of tree; just refactored after watching video; I prefer mine it looks cleaner and o(d) is more efficient
  function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    //set the variables and boolean needed 
    let mom = null;
    let skip = false;
    let other = null;
  
    function search (motherNode, nodeToFind) {
      if (motherNode === null) {
        return false;
      }
  
      if (motherNode === nodeToFind) {
        return true;
      }
       
      return search(motherNode.left, nodeToFind) || search(motherNode.right, nodeToFind);
      
    }
    
    //traverse starting at nodeOne and check if hit nodeTwo
    if (search(nodeTwo, nodeOne)) {
      other = nodeOne;
      skip = true;
      if (search(nodeTwo, nodeThree)) {
        return false;
      }
      mom = nodeThree;
    }
  
    if (!skip) {
      if (search(nodeTwo, nodeThree)) {
        other = nodeThree;
        mom = nodeOne;     
      }
    }
  
    //if mom hasn't set answer is false
    if (!mom) {
      return false;
    }
  
    //traverse starting from nodeTwo and see if we hit other
    if (search(mom, nodeTwo)) {
      return true;
    }
    
    return false;
  }

  //solution 3 o(3d) || 0(d) time where d is distance of nodeOne and nodeThree o(1) space bc iterative rids the need for call stack:
  function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    //set the variables and boolean needed 
    let mom = null;
    let skip = false;
    let other = null;
  
    function search (motherNode, nodeToFind) {
      const queue = [motherNode];
      const visited = new Set();
      
      while (queue.length) {
        let cur = queue.shift();
        if (cur && !visited.has(cur)) {
          visited.add(cur);
          if (cur === nodeToFind) {
            return true;
          }     
          
          queue.push(cur.left);
          queue.push(cur.right);   
        }  
        
      }
  
      return false;
    }
    
    //traverse starting at nodeOne and check if hit nodeTwo
    if (search(nodeOne, nodeTwo)) {
      skip = true;
      mom = nodeOne;
      other = nodeThree;
    }
  
    //if !skip traverse starting at nodeThree and check if hit nodeTwo
    if (!skip) {
      if (search(nodeThree, nodeTwo)) {
      mom = nodeThree;
      other = nodeOne;
    }
    }
  
    //if mom hasn't set answer is false
    if (!mom) {
      return false;
    }
  
    //traverse starting from nodeTwo and see if we hit other
    if (search(nodeTwo, other)) {
      return true;
    }
    
    return false;
  }