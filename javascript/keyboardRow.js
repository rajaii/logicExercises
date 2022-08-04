// from leetcode easy: https://leetcode.com/problems/keyboard-row/

var findWords = function(words) {
  //set the vars in memory
  const rowOne = 'qwertyuiop'
  const rowTwo = "asdfghjkl";
  const rowThree = "zxcvbnm";
  const goodWords = [];

  
  // loop words on each row checking if each letter of word[i] is in the row/pushing at end if all are
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
          if (!rowOne.includes(words[i][j].toLowerCase())) {
           break;
          } else if (j === words[i].length - 1 && rowOne.includes(words[i][j].toLowerCase())) {
              goodWords.push(words[i]);
          }
      }
  }
  
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
          if (!rowTwo.includes(words[i][j].toLowerCase())) {
           break;
          } else if (j === words[i].length - 1 && rowTwo.includes(words[i][j].toLowerCase())) {
              goodWords.push(words[i]);
          }
      }
  }
  
  for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
          if (!rowThree.includes(words[i][j].toLowerCase())) {
           break;
          } else if (j === words[i].length - 1 && rowThree.includes(words[i][j].toLowerCase())) {
              goodWords.push(words[i]);
          }
      }
  }
  
  return goodWords;
  
  
};

//PSEUDO
//const rowOne = 'qwertyuiop'
//const rowTwo = "asdfghjkl";
//const rowThree = "zxcvbnm";
//const goodWords = [];

//run on each row
//loop words
//loop words[i]
//if (!rowOne.includes(words[i][j])) {
//continue;
//} else if (j === words[i].length && rowOne.includes(words[i][j])) {
//if (!goodWords.includes(words[i])) {
//goodWords.push(words[i]);
//}
//}