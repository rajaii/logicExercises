//from leetcode easy https://leetcode.com/problems/robot-return-to-origin/submissions/

var judgeCircle = function(moves) {
    //set x and y
    let x = 0;
    let y = 0;
    
    //loop moves and add to x and why according to move
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'R') { 
            x += 1;
        } else if (moves[i] === 'L') {
           x -= 1;        
        } else if (moves[i] === 'U') {
           y += 1;        
        } else {
           y -= 1;        
        }
    }
    
    return true && x === 0 && y === 0;
    
};

//?'s: limits on time/space? 
//edge cases: 1 move, large moves all same then changing

//set x = 0; y = 0;
//loop through moves
//set logic to add to x and y according to the moves
    //U => y+=1; R => x += 1; L => x -= 1; D => y -= 1;

//if  x === 0 && y === 0 => return true
