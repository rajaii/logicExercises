//from leetcode https://leetcode.com/problems/goat-latin/

var toGoatLatin = function(s) {
    //set the vowel arrays to check against
    const vowels = ['a','e','i','o','u'];
    const Vowels = ['A','E','I','O','U'];
    
    //split s into an array and loop it checking against vowels and making the additions
    sArr = s.split(' ');
    for (let i = 0; i < sArr.length; i++) {
      if (!vowels.includes(sArr[i][0]) && !Vowels.includes(sArr[i][0])) {
          let temp = sArr[i][0];
          sArr[i] = sArr[i].replace(sArr[i][0], '');
          sArr[i] += `${temp}ma`;
          for (let j = 0; j < i + 1; j++) {
          sArr[i] += 'a';      
      }
      } else {
        sArr[i] += 'ma';
        for (let j = 0; j < i + 1; j++) {
        sArr[i] += 'a';
        }
      }
      }  
    return sArr.join(' ')
    
    
};

//edge cases: s === 1, 
//?'s: limits on time/space?

//PSEUDO:
//make vowels = [a,e,i,o,u]
//make Vowles = [A,E,I,O,U]

//let sArr = s.split(' ')
//loop sArr
//if (!vowels.includes(sArr[i][0]) && !Vowels.includes(sArr[i][0]))
//let temp = sArr[i][0];
//sArr[i].replace('s[i][o]', '');
//sArr[i] += `${temp}ma`
//for (let j = 0; j < i; j++)
//sArr[i] += 'a'

//else 
//sArr[i] += 'ma'
//for (let j = 0; j < i; j++)
//sArr[i] += 'a'

//return sArr.join(' ')