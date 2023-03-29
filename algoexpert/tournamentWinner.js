//EASY:

//first solution o(n) time o(n) space
function tournamentWinner(competitions, results) {
  //get object of the form {name: 0}
  let stats = {};

  for (let i = 0; i < competitions.length; i++) {
    stats[competitions[i][0]] = 0;
    stats[competitions[i][1]] = 0;
  }

  //loop competitions and results and iterate the wins accordingly
  for (let i = 0; i < competitions.length; i++) {
     if (results[i] === 0) {
      stats[competitions[i][1]] += 3
    } else {
      stats[competitions[i][0]] += 3
    }
  }

  //find max and return the key of the max in stats
  const max = Math.max(...Object.values(stats));
  for (let key in stats) {
    if (stats[key] === max) {
      return key;
    }
  }

}

//refactor for cleanliness and one less pass:
function tournamentWinner(competitions, results) {
  //get object of the form {name: 0}
  let stats = {};

  //loop competitions and results and iterate the wins accordingly
  for (let i = 0; i < competitions.length; i++) {
     if (results[i] === 0) {
      if (stats[competitions[i][1]]) {
        stats[competitions[i][1]] += 3;
      } else {
        stats[competitions[i][1]] = 3;
      }   
    } else {
       if (stats[competitions[i][0]]) {
         stats[competitions[i][0]] += 3;
       } else {
         stats[competitions[i][0]] = 3;
       }
    }
  }

  //find max and return the key of the max in stats
  const max = Math.max(...Object.values(stats));
  for (let key in stats) {
    if (stats[key] === max) {
      return key;
    }
  }

}


//refactor after watching video: one less mass and no math.max needed


function tournamentWinner(competitions, results) {
  //get object of the form {name: 0}
  let stats = {"": 0};
  let bestTeam = "";
  
  //loop competitions and results and iterate the wins accordingly
  for (let i = 0; i < competitions.length; i++) {
     if (results[i] === 0) {
      if (stats[competitions[i][1]]) {
        stats[competitions[i][1]] += 3;
        if (stats[competitions[i][1]] > stats[bestTeam]) {
          bestTeam = competitions[i][1];
        }
      } else {
        stats[competitions[i][1]] = 3;
        if (stats[competitions[i][1]] > stats[bestTeam]) {
          bestTeam = competitions[i][1];
        }
      }   
    } else {
       if (stats[competitions[i][0]]) {
         stats[competitions[i][0]] += 3;
         if (stats[competitions[i][0]] > stats[bestTeam]) {
          bestTeam = competitions[i][0];
        }
       } else {
         stats[competitions[i][0]] = 3;
         if (stats[competitions[i][0]] > stats[bestTeam]) {
          bestTeam = competitions[i][0];
        }
       }
    }
  }

  return bestTeam;
};

//solution 3 practicing classes and recursion
function tournamentWinner(competitions, results) {
  class Solution {
    constructor() {
      this.competitions = competitions;
      this.results = results;
    }

    findWinnerHelper (gameStats, winner, i) {
      console.log(this)
      if (i === this.competitions.length) {
        return winner;
      }

      if (this.results[i] === 0) {
        if (gameStats[this.competitions[i][1]]) {
          gameStats[this.competitions[i][1]] += 3;
          if (gameStats[this.competitions[i][1]] > gameStats[winner]) {
            winner = this.competitions[i][1];
          }
        } else {
          gameStats[this.competitions[i][1]] = 3;
          if (gameStats[this.competitions[i][1]] > gameStats[winner]) {
            winner = this.competitions[i][1];
          }
        } 
      }

      if (this.results[i] === 1) {
        if (gameStats[this.competitions[i][0]]) {
          gameStats[this.competitions[i][0]] += 3;
          if (gameStats[this.competitions[i][0]] > gameStats[winner]) {
            winner = this.competitions[i][0];
          }
        } else {
          gameStats[this.competitions[i][0]] = 3;
          if (gameStats[this.competitions[i][0]] > gameStats[winner]) {
            winner = this.competitions[i][0];
          }
        } 
      }

      i += 1;
      return this.findWinnerHelper(gameStats, winner, i);
    }

    findWinner () {
      let gameStats = {"": 0};
      let winner = "";
      let i = 0;

      return this.findWinnerHelper(gameStats, winner, i);
    }
  }
  
  return new Solution().findWinner();
}