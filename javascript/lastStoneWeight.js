//  from leetcode easy: https://leetcode.com/problems/last-stone-weight/

var lastStoneWeight = function(s) {
    //loop while they all aren't 0 and run logic to break the stones
    while (!s.every(st => st === 0)) {
        //set a count to check if only 1 isn't 0 and return that if it is
        let count = 0;
        s.forEach(s => {
        if (s !== 0) {
        count += 1;
        }
        });
        if (count === 1) {
        return Math.max(...s);
        }
        //tag the indexs of x and y and replace them with 0's and move on if == and         //if not replace y with y - x
        let i = s.indexOf(Math.max(...s));
        let y = s[i];
        s.splice(i, 1, 0)
        let j = s.indexOf(Math.max(...s));
        let x = s[j];
        s.splice(j, 1, 0);
        if (x === y) {
        continue;
        }
        y -= x
        s.splice(i, 1, y)
        }
    
    return 0;
};

//PSEUDO:
//while (s.every(st => st !== 0)) {
//let count;
//s.forEach(s => {
//if (s !== 0) {
//count += 1
//}
//})
// if (count === 1) {
//return Math.max(...s)
//}
//let i = s.indexOf(Math.max(...s))
//let y = s[i]
//s.splice(i, 1, 0)
//let j = s.indexOf(Math.max(...s))
//let x = s[j]
//s.splice(j, 1, 0)
//if (x === y) {
//continue;
//}
//y -= x
//s.splice(i, 1, y)
//}

//return 0

//refactor in trying neetCode

var lastStoneWeight = function(stones) {
  //. run logic to play game while there are more than one stones in stones
  while (stones.length > 1) {
      const y = Math.max(...stones);
      stones.splice(stones.indexOf(y), 1);
      const x = Math.max(...stones);
      stones.splice(stones.indexOf(x), 1);
      
      if (y == x) {
          continue;
      }

      stones.push((y-x));

  } 

  return stones[0] || 0;
};

//PSEUSDO:

//while (stones.length > 1)
//let y = stones.remove(max);
//let x = stones.remove(max);

//run logic pushing into stones (y - x) if x !== y


//out of loop return stones[0]
