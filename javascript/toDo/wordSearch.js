//from leetcode medium https://leetcode.com/problems/word-search/

var exist = function(board, word) {
    //transform word to upper case 
    let w = word.toUpperCase();
    
    //make a startqueue so can restart and copy spread into the queue to be used on the         //iterations
    let startQueue = word.split('');
    
    //double loop to tag the inner array, and then run a while loop with conditionals and       //currents to tag i and j and a visited array and a queu to check if the word is in the     //board. If the length of queue hits 0 return true, if the entire loop is finished           //return false  
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let currentI = i;
            let currentJ = j;
            let visited = [];
            let queue = [...startQueue];
            
            while (board[currentI][currentJ] === queue.shift()) {
                queue.shift();
                visited.push([currentI, currentJ]);
                
                if (queue.length === 0) {
                    return true;
                } 
                
                else if (board[currentI + 1] != undefined && board[currentI + 1][currentJ] === queue.shift() && !visited.includes([currentI + 1, currentJ])) {
                    currentI += 1;
                    continue;          
                } 
                
                else if (board[currentI - 1] != undefined && board[currentI - 1][currentJ] === queue.shift() && !visited.includes([currentI - 1, currentJ])) {    
                currentI -= 1;
                continue;     
                }
                
                else if (board[currentI][currentJ + 1] != undefined && board[currentI][currentJ + 1] === queue.shift() && !visited.includes([currentI, currentJ + 1])) {
                currentJ += 1;
                continue;   
                }
                
                else if (board[currentI][currentJ - 1] != undefined && board[currentI][currentJ - 1] === queue.shift() && !visited.includes([currentI, currentJ - 1])) {
                currentJ -= 1;
                continue;      
                }
                
                else {
                    break;
                }
                
            }
        }
    }
    
    return false;
    
};

//edge cases: board.length * board[i].length < word.length,
//?'s: limit on time/space? 

//PSEUDO:

//let w = word.toUpperCase();
//make startQueue of w => loop and push into array


//double loop board tagging inner arrays
//let currentI = i
//let currentJ = j
//let visited = []
//let queue = [...startQueue]

//while board[currentI][currentJ] === queue.shift():
//queue.shift() //maybe not if ^ actually calls it
//visited.push([currentI, currentJ])

//if queue.length === 0:
//return true; 

//else if board[currentI + 1][currentJ] === queue.shift() && !visited.includes([currentI + 1, currentJ]):
//currentI += 1;
//continue

//else if board[currentI - 1][currentJ] === queue.shift() && !visited.includes([currentI - 1, currentJ])::
//currentI -= 1;
//continue

//else if board[currentI][currentJ + 1] === queue.shift() && !visited.includes([currentI, currentJ + 1]):
//currentJ += 1;
//continue

//else if board[currentI][currentJ - 1] === queue.shift() && !visited.includes([currentI, currentJ - 1])::
//currentJ -= 1;
//continue

// else break;

//return false
