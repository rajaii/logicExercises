//from leetcode easy https://leetcode.com/problems/shortest-completing-word/submissions/

var shortestCompletingWord = function(licensePlate, w) {
    //set licensePlate to lower case and the memory needed to count letters, completing words, and           //shortest
    let lp = licensePlate.toLowerCase();
    let count = {};
    let completing = [];
    
    
    //take out all non-letters from l
    const l = lp.replace(/[^a-z]/g, '');
    
    
    //populate the count object
    for (let i = 0; i < l.length; i++) {
        if (count[l[i]] === undefined) {
            count[l[i]] = 1;
        } else {
            count[l[i]] += 1;
        }
    }
    
    //populate completing by looping words[i] and making sure each letter in word occurs at least           //count[letter] times populate completing in doing so
  

    let tempObj = {}
    for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < w[i].length; j++) {
            if (count[w[i][j]] === undefined) {
                continue;
            } else {
                 if (tempObj[w[i][j]] === undefined) {
                tempObj[w[i][j]] = 1; 
            } else if (tempObj[w[i][j]] != undefined) {
                tempObj[w[i][j]] += 1;  
            }
            }
            
        }
        let p = true;

        for (let key in count) {
          if (tempObj[key] === undefined) {
              p = false;
              break;
          }  
          else if (count[key] > tempObj[key]) {
              p = false;
              break;
          }  else {
             continue 
          }
        }
        if (p === true) {
            completing.push(w[i]);
        }
        tempObj = {};
        
    }
       
        completing.sort((a,b) => {
            if (a.length === b.length) {
                return w.indexOf(a.length) - w.indexOf(b.length)
            } else {
            return a.length - b.length
            }
        })
        return completing[0]
    
    
};

//edge cases:
//?'s:

//pseudo:

//run and save in memory lp = licensePlate.toLowerCase() count = {} and completing = [] and shortest = []

//l = string.replace() on lp and take out all the letters ie remove non letters

//loop l and make an object of the form comp = {l[i]: count}

//loop each word in words and compare to see if it has all the letters in comp and at least the count amt

//if it does push it into completing

//find the word/words with the shortest length in completing and push those into shortest 

//if length of shortest === 1 return shortest[0] else find which is first in words and return that

//edge cases:
//?'s:

//pseudo:

//run and save in memory lp = licensePlate.toLowerCase() count = {} and completing = [] and shortest = []

//l = string.replace() on lp and take out all the letters ie remove non letters

//loop l and make an object of the form comp = {l[i]: count}

//loop each word in words and compare to see if it has all the letters in comp and at least the count amt

//if it does push it into completing

//find the word/words with the shortest length in completing and push those into shortest 

//if length of shortest === 1 return shortest[0] else find which is first in words and return that