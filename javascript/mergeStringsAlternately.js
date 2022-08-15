// from leetcode easy: https://leetcode.com/problems/merge-strings-alternately

var mergeAlternately = function(word1, word2) {
  //make the string to append to and return
  let retStr = "";
  
  //get the excess
  let excess = false;
  let index;
  let toLoop = word1;
  if (word1.length > word2.length) {
      toLoop = word2;
      index = word2.length;
      excess = word1.slice(index);
  } else if (word2.length > word1.length) {
      index = word1.length;
      excess = word2.slice(index);
  }
  
   for (let i = 0; i < toLoop.length ; i++) {
      retStr = `${retStr}${word1[i]}${word2[i]}`;
  }
  
  //append extra
  if (excess) {
      retStr = `${retStr}${excess}`;
  }
  
  return retStr;
};

//PSEUDO:

//make a str to append to
//make a str that is the longer stuff from the length of the smallest 

//loop word1
//append word1[i]word2[i]

//out of loop:
//append extra to the str