//from leetcode easy: https://leetcode.com/problems/slowest-key/

var slowestKey = function(releaseTimes, keysPressed) {
    //set the memory to track the max release times and keys pressed in those times
    let max = 0;
    let keys = [];

    // loop release times setting the max to the highest as it iterates and pushing into keys the keys       //that were pushed at the max times
    for (let i = 0; i < releaseTimes.length; i++) {
      if (i === 0) {
          max = releaseTimes[i];
          keys.push(keysPressed[i]);
      }  else if (releaseTimes[i] - releaseTimes[i -1] > max) {
          max = releaseTimes[i] - releaseTimes[i -1];
          keys.length = 0; 
          keys.push(keysPressed[i]);
      } else if (releaseTimes[i] - releaseTimes[i -1] === max) {
          keys.push(keysPressed[i]);
      }
    }
    
    //if there is 1 in keys return that, and if not sort keys and then return the last key in the array
    if (keys.length === 1) {
        return keys[0]
    } else {
        keys.sort();
        return keys.pop();
    }
};

//edge cases: all same key, all same difference in times,
//?'s: limits on time/space?

//PSEUDO:
//set max = 0;
//set keys = []
//loop releaseTimes
//if i = 0 => max = releaseTimes[i]; keys.push(keysPressed(i))
//else if (releaseTimes[i] - releaseTimes[i -1] > max) => max = releaseTimes[i] - releaseTimes[i -1]; //keys.length = 0; keys.push(keysPressed[i])
//else if (releaseTimes[i] - releaseTimes[i -1] === max) => keys.push(keysPressed[i])

//out of loop
//if (keys.length === 1) => return keys[0]
//else keys.sort; return keys[keys.length - 1]