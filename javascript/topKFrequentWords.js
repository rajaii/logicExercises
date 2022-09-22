//  from leetcode medium https://leetcode.com/problems/top-k-frequent-words

var topKFrequent = function(words, k) {
  //set the memory needed
  const countsObj = {};
  const counts = [];
  const ret = [];
  
  //loop words and take a count of words in countObj
  for (let i = 0; i < words.length; i++) {
      countsObj[words[i]] = countsObj[words[i]] + 1 || 1;
  }
  
  //push Object.values(countsObject).length empty arrays in coutns
  for (let i = 0; i < Object.values(countsObj).length; i++) {
      counts.push([]);
  }
  
  //loop object and mamke pushs to make counts[i]'s of the form [word, count]
  let i = 0;
  for (let key in countsObj) {
      counts[i].push(key)
      counts[i].push(countsObj[key]);
      i += 1;
  }
  
  //sort counts by count desc, and if counts are equal by word asc
  counts.sort((a,b) => {
      if (a[1] === b[1] && a[0] < b[0]) {
          return -1;
      } 
      
      if (a[1] === b[1] && a[0] > b[0]) {
          return 1;
      }
      
      return b[1] - a[1];
  })  
  
  //loop counts and push counts[i][0] into ret
  for (let i = 0; i < k; i++) {
      ret.push(counts[i][0]);
  }
  
  return ret
};

//PSEUDO:
//const countsObj = {};
//const counts = [];
//const ret = [];
//loop words and take a count of words in countObj

//push Object.values(countsObject).length empty arrays in coutns

//loop object and make counts[i]'s of the form [word, count]

//sort counts by count desc, and if counts are equal by word asc

//loop counts and push counts[i][0] into ret

//return ret