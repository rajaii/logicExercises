//Easy:

//first sln o (log n) time, o (1) space

function nonConstructibleChange(coins) {
  coins.sort((a,b) => a - b);
  let nonConst = 0;
  
  for (let i = 0 ; i < coins.length; i++) {
    if (coins[i] <= nonConst + 1) {
      nonConst += coins[i];
      continue;
    }
    nonConst += 1;
    return nonConst;
  }
  
  return nonConst ? nonConst + 1 : 1;
}

//solution 2 same on time and space but practice class and recursion
function nonConstructibleChange(coins) {
  class Solution {
    constructor () {
      this.coins = coins.sort((a,b) => a - b);
    }

    helperFindLeast = (i, change) => {
      if (i === this.coins.length) {
        return change ? change + 1 : 1;
      }

      if (this.coins[i] > change + 1) {
        return change + 1;
      }
      change += this.coins[i];
      i += 1;
      return this.helperFindLeast(i, change);
    }

    findLeast = () => {
      let i = 0;
      let change = 0;
      return this.helperFindLeast(i, change);
    }
  }

  return new Solution().findLeast();
}