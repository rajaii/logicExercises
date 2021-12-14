//from leetcode medium: https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/

var minPartitions = function(n) {
    const a = n.split("")
    const x = a.map(n => parseInt(n))
    return Math.max(...x)    
  };

  //refactor after study

  var minPartitions = function(n) {
    return Math.max(...n)    
  };