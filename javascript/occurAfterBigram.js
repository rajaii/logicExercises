//  from leetcode easy: https://leetcode.com/problems/occurrences-after-bigram/

var findOcurrences = function(text, first, second) {
  //split text and set the thirds array
  const thirds = [];
  const s = text.split(" ");
  
  //loop s to s.length - 3 and check conditions
  for (let i = 0; i < s.length - 2; i++) {
      if (s[i] === first && s[i+1] === second) {
          thirds.push(s[i + 2])
      };
  }
  
  return thirds;
};

//PSEUDO:

//split text const s = text.split("");
//set thirds = [];
//loop s to s.length - 3
// if (s[i] === first && s[i+1] === second) {
// thirds.push(s[i + 2])
//}

//return thirds