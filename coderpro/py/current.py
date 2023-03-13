class Node(object):
  def __init__(self, val, left=None, right=None):
    self.val = val
    self.left = left
    self.right = right

def valid_binary_search_tree(node):
  if node.left > node.right:
    return false;

  valid_binary_search_tree(node.left)
    


#PSEUDO:

#traverse right:
  #if any value is greater than the root:
    #return false

#traverse left:
  #if any value is lower than root:
    # return false

#out of traversal:
  # return true