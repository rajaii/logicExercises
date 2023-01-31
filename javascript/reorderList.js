//from leetcode easy: https://leetcode.com/problems/reorder-list/description/

var reorderList = function(head) {
  // make array with values
  let cur = head
  const nodes = [];
  while (cur !== null) {
      nodes.push(cur);
      cur = cur.next;
  }

  let half = Math.floor(nodes.length / 2)

  let backwards = nodes.length - 1;

  for (let forwards = 0; forwards <= half; forwards++) {
      if (forwards === half) {
          nodes[forwards].next = null;
          break
      }
      let temp = nodes[forwards].next;
      nodes[forwards].next = nodes[backwards];
      nodes[backwards].next = temp;
      backwards -= 1;

  }

  return nodes[0];
   

};