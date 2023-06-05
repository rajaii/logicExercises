//HARD

//solution 1 o(d) time where d is distance of nodeOne and nodeThree o(1) space:
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