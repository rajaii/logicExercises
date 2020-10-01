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
            let prevI;
            let prevJ;
            let queue = [...startQueue];
            
            while (board[currentI][currentJ] === queue.shift()) {
               visited.push([currentI, currentJ]);
               console.log(visited)
                if (queue.length === 0) {
                    return true;
                } 
                
                else if (board[currentI + 1] != undefined && board[currentI + 1][currentJ] === queue[0] && visited.find(a => a[0] === currentI + 1 && a[1] === currentJ) === undefined){                   prevI = currentI;
                    prevJ = currentJ;
                    currentI += 1;
                    continue;          
                } 
                
              else if (board[currentI - 1] != undefined && board[currentI - 1][currentJ] === queue[0] && visited.find(a => a[0] === currentI - 1 && a[1] === currentJ) === undefined){ 
                prevI = currentI;
                prevJ = currentJ;
                currentI -= 1;
                continue;     
                }
                
                else if (board[currentI][currentJ + 1] != undefined && board[currentI][currentJ + 1] === queue[0] && visited.find(a => a[0] === currentI && a[1] === currentJ + 1) === undefined)  {
                prevI = currentI;
                prevJ = currentJ; 
                currentJ += 1;
                continue;   
                }
                
                else if (board[currentI][currentJ - 1] != undefined && board[currentI][currentJ - 1] === queue[0] && visited.find(a => a[0] === currentI && a[1] === currentJ - 1) === undefined)  {
                prevI = currentI;
                prevJ = currentJ;
                currentJ -= 1;
                continue;      
                }
                
                else {
                    if (prevI != undefined && prevJ != undefined && (visited.find(a => a[0] === prevI + 1 && a[1] === prevJ) === undefined || visited.find(a => a[0] === prevI - 1 && a[1] === prevJ || visited.find(a => a[0] === prevI || a[1] === prevJ + 1 || visited.find(a => a[0] === prevI && a[1] === prevJ - 1) === undefined) === undefined)) === undefined) {
                        visited.push([currentI, currentJ]);
                        queue.unshift(board[currentI][currentJ])
                        currentI = prevI;
                        currentJ = prevJ;
                    } else {
                        break;
                    }
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

// ["C","A","A"]
// ["A","A","A"]
// ["B","C","D"]

//starts at 1,1 then goes back to 0,1 instead of 1,0 and 2,0 to return true
//else if (visited does not have aall the surrounding values pf previous)
//visited.push(current values references)
//return to previous and run again