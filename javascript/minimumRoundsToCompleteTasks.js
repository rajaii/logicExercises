// from leetcode medium:  https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/

var minimumRounds = function(tasks) {
  //loop and make object with counts
  const counts = {};
  for (let i = 0; i < tasks.length; i++) {
      if (counts[tasks[i]] === undefined) {
          counts[tasks[i]] = 1;
      } else {
          counts[tasks[i]] += 1;
      }
  }
  
  let countVals = Object.values(counts);
  if (countVals.indexOf(1) !== -1) {
      return -1;
  }
  
  //loop Object.values(counts) and run logic to count
  let counter = 0;
  for (let i = 0; i < countVals.length; i++) {
      let temp = countVals[i];
      while (temp > 0) {
           if (temp - 3 >= 2) {
               temp -= 3;
               counter += 1;
           } else if (temp - 3 === 0) {
               temp -= 3;
               counter += 1;
           } else if (temp - 2 === 0) {
               temp -= 2;
               counter += 1;
           } else {
               temp -= 2;
               counter += 1;
           }
      }
  }
  
  return counter;
};

//PSEUDO:
//loop and count tasks, and if a task has a 1 count return -1
//use object counts with form {task: count} for this

//set counter
//loop counts
  //set temp = counts[i]
  //while (temp > 0):
      //if temp - 3 >= 2:
          //temp -= 3;
          //counter += 1;
      //else:
          //temp -= 2;
          //counter += 1;



//return counter

//refactor after study

var minimumRounds = function(tasks) {
  //loop and make object with counts
  const counts = {};
  for (let i = 0; i < tasks.length; i++) {
      counts[tasks[i]] = counts[tasks[i]] + 1 || 1;
  }
  
  let countVals = Object.values(counts);
  
  //loop Object.values(counts) and run logic to count
  let counter = 0;
  for (let i = 0; i < countVals.length; i++) {
      if (countVals[i] < 2) {
          return -1;
      }
      counter += Math.ceil(countVals[i] / 3)
  }
  
  return counter;
};
