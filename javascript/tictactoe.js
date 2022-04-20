// from leetcode easy: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game

var tictactoe = function(moves) {
    //make the hash table of winners
    const winners = {
        diagonal1: [[0,0], [1,1],[2,2]],
        diagonal2: [[2,0],[1,1],[0,2]],
        vertical1: [[0,0],[1,0],[2,0]],
        vertical2: [[0,1],[1,1],[2,1]],
        vertical3: [[0,2],[1,2],[2,2]],
        horizontal1: [[0,0],[0,1],[0,2]],
        horizontal2: [[1,0],[1,1],[1,2]],
        horizontal3: [[2,0],[2,1],[2,2]],
    };
    
    //break up moves into A and B
    const A = [];
    const B = [];
    
    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) {
            A.push(moves[i]);
        } else {
            B.push(moves[i]);
        }
    }

    for (let key in winners) {   
        let aCount = 0;
        let bCount = 0;
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < 3; j++) {
                if ((A[i][0] === winners[key][j][0] && A[i][1] === winners[key][j][1])) {
                    aCount += 1; 
                    break;
            }
            }
        } 
        
        if (aCount === 3) {
            return "A"
        }
        
        for (let i = 0; i < B.length; i++) {
            for (let j = 0; j < 3; j++) {
                if ((B[i][0] === winners[key][j][0] && B[i][1] === winners[key][j][1])) {
               bCount += 1; 
            }
            }        
        } 
        if (bCount === 3) {
            return "B"
        }
    }
    
    if (moves.length === 9) {
        return "Draw";
    } else {
        return "Pending";
    }
};

//PSEUDO:

//starts with A

//make a hash table with the winning serires as the values

//break up moves into A and B

//loop the hash table  and sub lop A/B 

//if A/B includes any 3 combo winners they win

//if moves.length = 9 and no one wins return "Draw"

//if moves.length < 9 and no one wins return "Pending"