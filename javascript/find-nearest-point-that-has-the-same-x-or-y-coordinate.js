//from leetcode easy https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/submissions

var nearestValidPoint = function(x, y, points) {
  //set the memory needed
  const manhattanDs = [];
  const indexs = [];
  
  //loop points and check and push into array if condition met
  for (let i = 0; i < points.length; i++) {
      if (points[i][0] === x || points[i][1] === y) {
          const manhattanD = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
          manhattanDs.push(manhattanD);
          indexs.push(i);
      }   
  }

  if (manhattanDs.length === 0) {
      return -1;
  }
  
  return indexs[manhattanDs.indexOf(Math.min(...manhattanDs))];
};

//PSEUDO:
//set manhattanDs = [];
//set indexs = []; ///
//loop points
//if (points[i][0] === x || points[i][1] === y) {
//const manhattanD = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
//manhattanDs.push(manhattanD);
// indexs.push(i); ///
//}

//
//return indexs[manhattanDs.indexOf(Math.min(...manhattanDs));
