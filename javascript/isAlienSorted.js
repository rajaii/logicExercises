//from leetcode easy https://leetcode.com/problems/verifying-an-alien-dictionary/submissions/

var isAlienSorted = function(words, order) {
    if (words.length === 1) {
        return true;
    }
    
    let counter = 1;
    const orderObj = {};
    
    for (let i = 0; i < order.length; i++) {
        orderObj[order[i]] = counter;
        counter += 1;
    }
    
    for (let i = 0; i < words.length; i++) {
        if (words[i+1] != undefined && orderObj[words[i][0]] > orderObj[words[i+1][0]]) {
           return false; 
        }
        else if (words[i+1] != undefined && orderObj[words[i][0]] === orderObj[words[i+1][0]]) {
            let current = 0;
            while (current <= words[i].length) {
                
                if (orderObj[words[i][current]] < orderObj[words[i+1][current]]) {
                    break;
                }
                
                else if (orderObj[words[i][current]] === orderObj[words[i+1][current]] &&
                words[i+1].length === current + 1 && words[i].length > current + 1) { 
                    return false
                }
                
                 else if (orderObj[words[i][current]] === orderObj[words[i+1][current]] &&
                words[i+1].length > current + 1 && words[i].length === current + 1) { 
                    break 
                }
                else if (orderObj[words[i][current]] === orderObj[words[i+1][current]]) {
                    current += 1
                    continue
                }
                
                else if (orderObj[words[i][current]] > orderObj[words[i+1][current]]) {
                    return false
                }
                
                
            }    
        }
       
        
    }
    
    return true
};

//edge cases: all same order  1 word return true,  
//?'s: limits on time/space? what if all same order, t or f

//words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"

//make counter= 1
//make an object loop through order and set orderObj[order[i]] = counter
//counter += 1

//loop through words
//if orderObj[words[i][0]] > orderObj[words[i+1][0]]
//return false

//else if orderObj[words[i][0]] === oederObj[words[i+1][0]]
//set up while loop to loop both until < or greater and either continue or return false
//account for example 3 here

//else
//continue

//return true