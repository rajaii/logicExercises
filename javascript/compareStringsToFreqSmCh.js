//from leetcode medium: https://leetcode.com/problems/compare-strings-by-frequency-of-the-smallest-character

var numSmallerByFrequency = function(queries, words) {
  //split and sort queries and words
  const q = queries.map(item => item.split("").sort().join(""));
  const w = words.map(item => item.split("").sort().join(""));
  
  //set the memory needed
  const answer = [];
  const countsQ = [];
  const countsW = [];
  
  //loop queries and words and count the frequencies of sm ch
  for (let i = 0; i < q.length; i++) {
      let index = q[i].split("").findIndex(e => e !== q[i].split("")[0]);
      if (index === -1) {
          countsQ.push(q[i].length);
          continue;
      }
      countsQ.push(q[i].slice(0, index).length) 
  }
  
  for (let i = 0; i < w.length; i++) {
      let index = w[i].split("").findIndex(e => e !== w[i].split("")[0]);
      if (index === -1) {
          countsW.push(w[i].length);
          continue;
      }
      countsW.push(w[i].slice(0, index).length) 
  }
  

  //loop countsQ inner loop countsW and compare
  for (let i = 0; i < countsQ.length; i++) {
      let count = 0;
      for (let j = 0; j < countsW.length; j++) {
          if (countsQ[i] < countsW[j]) {
              count += 1;
          }
      }
      answer.push(count);
  }
  
  return answer;
};

//PSEUDO:


//split and sort both queries and words
//set answer = [];
//set countsQ and countsW

//loop queries (and then same on words)
//let index = queries[i].split("").findIndex(e => e !== words[i].split("")[0]);
//countsQ.push(queries.slice(0, index).length) 
//


//loop countsW
//let count = 0;
//inner loop countsQ
//if (countsQ[i] < countsW[j]) {
//count += 1;
//}

//out of inner in outer loop
//answer.push(count)


//return answer