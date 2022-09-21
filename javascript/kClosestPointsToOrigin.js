//  from leetcode medium https://leetcode.com/problems/k-closest-points-to-origin

var kClosest = function(points, k) {
  //make an array of the form [[i, distance]]
  const distances = [];
  for (let i = 0; i < points.length; i++) {
      const distance = Math.sqrt((points[i][0] - 0) ** 2 + (points[i][1] - 0) ** 2);
      distances.push([i, distance]);
  }
  
  //sort array by distances
  distances.sort((a, b) => a[1] - b[1]);
  
  //take points[array[0]] for the first k entries in the array and push them into ret
  const ret = [];
  for (let i = 0; i < k; i++) {
      ret.push(points[distances[i][0]])
  }
  
  return ret;    
};

//PSEUDO:
//loop points
//make an array of the form [i, distance]

//sort the array by distances

//take points[array[0]] for 