//from leetcode easy https://leetcode.com/problems/walking-robot-simulation/

var robotSim = function(commands, obstacles) {
    let x = 0;
    let y = 0;
    let direction = 'n';

    
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === -1 || commands[i] === -2) {
            if (commands[i] === -1) {
                if (direction === 'n') {
                    direction = 'e'
                } else if (direction === 's') {
                    direction = 'w'
                } else if (direction === 'e') {
                    direction = 's'
                } else if (direction === 'w') {
                    direction = 'n'
                } 
            } else if (commands[i] === -2) {
                if (direction === 'n') {
                    direction = 'w'
                } else if (direction === 's') {
                    direction = 'e'
                } else if (direction === 'e') {
                    direction = 'n'
                } else if (direction === 'w') {
                    direction = 's'
                } 
            }
                      
        } 
        
      else if (commands[i] > 0 && direction === 'n') {
             for (let j = 0; j < commands[i]; j++) {
                if (obstacles.filter(o => o === [x,y+1]).length > 0) {
                    break;
                } else {
                    y += 1;
                }
             }
        }
        
        
        else if (commands[i] > 0 && direction === 'e') {
            for (let j = 0; j < commands[i]; j++) {
                if (obstacles.filter(o => o === [x+1,y]).length > 0) {
                    break;
                } else {
                    x += 1;
                }
             }
        }
        
        else if (commands[i] > 0 && direction === 's') {
            for (let j = 0; j < commands[i]; j++) {
                if (obstacles.filter(o => o === [x,y-1]).length > 0) {
                    break;
                } else {
                    y -= 1;
                }
             }
        }
        
        else if (commands[i] > 0 && direction === 'w') {
            for (let j = 0; j < commands[i]; j++) {
                if (obstacles.filter(o => o === [x-1,y]).length > 0)   {
                    break;
                } else {
                    x -= 1;
                }
             }
        }
    }
    return ((x ** 2) + (y ** 2))
    
};



//PSEUDO:
//edge cases: empty commands (ret 0) or obsacles (skip that portion of the logic).
//?'s.  what todo if empty commands? Will all steps be ints? limits on time/space?

//-1 right, -2 left
//make a x and a y intitially
//let x =0; let y = 0;
//make a direction = up initially.
//make an obj with an obj as key, and new direction as value
//dObj = {}, made
//obsObj = {}
//loop obstacles and push {obstacle[i]: obstacle[i]}
//going to have to loop to figure out which move goes where
//stops = [] to denote coordinates of all the stops for distance purposes
//steps = [] to keep track of every step so we can avoid obstacles

//loop through commands:
//if command[i] === -1 || command[i] === -2:
    //loop dObj and figure new direction based off of where driection is now, and what the       //command is
    //direction = dObj[{direction: command[i]}]

//else if command > 0 && direction === 'n':
    //for (let i = 0; i < command; i++) {
    //if (obsObj[x,y] != null && [x,y] === obsObj[x,y]):
    //break loop
    //else
    //y += 1

  

//else if command > 0 && direction === 'e':
    //for (let i = 0; i < command; i++) {
    //if (obsObj[x,y] != null && [x,y] === obsObj[x,y]):
    //break loop
    //else
    //x += 1

    //outside of loop: stops.push([x,y])

//else if command > 0 && direction === 's':
    //for (let i = 0; i < command; i++) {
    //if (obsObj[x,y] != null && [x,y] === obsObj[x,y]):
    //break loop
    //else
    //y -= 1

    //outside of loop: stops.push([x,y])

//else if command > 0 && direction === 'w':
    //for (let i = 0; i < command; i++) {
    //if (obsObj[x,y] != null && [x,y] === obsObj[x,y]):
    //break loop
    //else
    //x -= 1

    //outside of loop: stops.push([x,y])


//now we have stops return (x-0) ^2 + (y-0) ^2

