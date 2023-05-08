//MEDIUM

//first solution o(n) time o(1) space
function bestSeat(seats) {
  //  handle all sets filled
  if (seats.every(seat => seat === 1)) {
    return -1;
  }

  //  find longest streak of 0's and then get the index in middle or middle left of that
  let longestStreak = 1;
  let longestStreakStart = 0;
  let temp = 1;
  let tempStart;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0 && seats[i-1] === 0) {
      if (temp === 1) {
        tempStart = i - 1;
      }
      temp += 1;
      continue
    }  

    if (temp > 1 && seats[i-1] === 0 && seats[i] === 1) {
      if (temp > longestStreak) {
        longestStreak = temp;
        longestStreakStart = tempStart;
      }
      temp = 1;
      continue;
    }
  }

  if (longestStreak === 1) {
    return seats.indexOf(0);
  }
 
  if (longestStreak % 2 === 0) {
    return (Math.floor(longestStreak / 2) - 1) + longestStreakStart;
  }
  
  return Math.floor(longestStreak / 2) + longestStreakStart;
}