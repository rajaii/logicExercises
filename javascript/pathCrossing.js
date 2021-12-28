//from leetcode easy: https://leetcode.com/problems/path-crossing/

var isPathCrossing = function(p) {
    //set the variables to hold the movement calculations, start (andit's incrementations), movements
    const start = [0,0]
    const movement = [[0,0],]
    const movementObj = {
    "N": () => start[1] += 1,
    "S": () => start[1] -= 1,
    "E": () => start[0] += 1,
    "W": () => start[0] -= 1,
    }
    
    //loop p and run operations and push into movements after ops ran
    for (let i = 0; i < p.length; i++) {
        movementObj[p[i]]();
        movement.push([...start])

    }
    
    //double loop movement and return true if they cross
    for (let i = 0; i < movement.length; i++) {
        for (let j = i + 1; j < movement.length; j++) {
            if (movement[i][0] === movement[j][0] && movement[i][1] === movement[j][1]) {
             return true;
            }
        }
    }
    
    return false;
    
    
};

//PSEUDO:

//set start = [0,0]
//set movement = [[0,0],]
//set movementObj = {
// "N": start[1] += 1,
// "S": start[1] -= 1,
// "E": start[0] += 1,
// "W": start[0] -= 1,
//}

//loop p
//movementObj[p[i]]
//movement.push(start) || movementObj.push([...start])


//double loop movement
//if (movement[i][0] === movement[j][0] && movement[i][1] === movement[j][1]) {
//return true;
//}

//out of loop return false

//refactor to o(n log n)
var isPathCrossing = function(p) {
    //set the variables to hold the movement calculations, start (andit's incrementations), movements
    const start = [0,0]
    const movement = [[0,0],]
    const movementObj = {
    "N": () => start[1] += 1,
    "S": () => start[1] -= 1,
    "E": () => start[0] += 1,
    "W": () => start[0] -= 1,
    }
    
    //loop p and run operations and push into movements after ops ran
    for (let i = 0; i < p.length; i++) {
        movementObj[p[i]]();
        movement.push([...start])
    }
    
    movement.sort((a,b) => a[0] - b[0]);
    movement.sort((a,b) => a[1] - b[1]);
    
    //loop movement and see if cross
    for (let i = 0; i < movement.length; i++) {
        if (i !== movement.length - 1 && (movement[i][0] === movement[i+1][0] && movement[i][1] === movement[i+1][1])) {
            return true;
        }
    }
    
    return false;
    
    
};