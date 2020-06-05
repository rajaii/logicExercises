//from Codewars 5 kyu https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript

function firstNonRepeatingLetter(s) {

    if (s.length === 1) {
    return s;
    }
    
    if (s.length > 1 && checkAllRepeating(s) || s === '') {
    return '';
    }
    
    let lowerS = s.toLowerCase()
    const repeated = [];
    
    for (let i = 0; i < lowerS.length; i++) {
    
    if (i === lowerS.length -1 && repeated.includes(lowerS[i])) {
      return '';
      } 
      
    if (!repeated.includes(lowerS[i]) && i === lowerS.length -1) {  
      return s[i]
      }
      
      for (let j = i + 1; j < lowerS.length; j++) {
      
      if (!repeated.includes(lowerS[i])) {
      if (j === lowerS.length - 1 && lowerS[i] != lowerS[j]) {
      return s[i];
      } else {
      if (lowerS[i] === lowerS[j]) {
      repeated.push(lowerS[i]);
      continue;
      }
      }
      }
      }
    }
  }
   function checkAllRepeating(s) {
   for(let i = 0; i < s.length; i++) {
     for (let j = i+1; j < s.length; j++) {
       if (s[i] != s[j]) {
       return false
       }
     }
   } return true
   }
  
  
  //PRE pseudo
  //edge cases empty str, repeats 
  
  //set already repeated array
  //nested loop checking i to i+1 or j
  //only do logic if i not in repeated
  //if i === j push into repeated 
  //if at i === s.length - 1 and s[i]  != s[j] return s[i] 
  //HANDLE UPPER CASES
  
  //'m,o,o,n,m,e,n'
  //'m,o,o,n,m,e,n'
  //m;o | m;o | m;n | m;m | m;e | m;n
  //o;o | o;n | o;m | o;e | o;n 
  //o;n | o;m | o;e | o;n 
  //n;m | n;e |n;n |
  //m;e | m;n 
  //e;n