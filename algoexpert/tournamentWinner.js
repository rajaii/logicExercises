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