//from leetcode medium https://leetcode.com/problems/watering-plants

var wateringPlants = function(p, capacity) {
    let c = capacity; 
    let i = 0;
    let steps = [];
    
    while (i < p.length) {
        steps.push(1)
        c -= p[i]
        if (c < p[i+1]) {
            steps.push(2 * (i + 1));
            i += 1;
            c = capacity;
        } else {
            i += 1;
        }
    }

    return steps.reduce((a,c) => a+c, 0)

};

//Pseudo:
//set c = capacity 
//let i = 0;
//let steps = [1]
//while (i < p.length) {
//steps.push(1)
//c -= plants[i]
//if (c < plants[i+1]) {
//steps.push(2 * (i + i));
//i += 1;
//c = capacity;
//continue;
//} else {
//i += 1;
//continue;
//}
//}

//return steps.reduce((a,c) => a+c, 0)

//2 refactors
var wateringPlants2 = function(p, capacity) {
    let c = capacity; 
    let i = 0;
    let steps = 0;

    p.forEach((pl, i) => {
        steps += 1
        c -= p[i];
        if (c < p[i+1]) {
            steps += (2 * (i + 1));
            c = capacity;
        } 
    })
    
    return steps 
};

var wateringPlants3 = function(p, capacity) {
    let c = capacity; 
    let i = 0;
    let steps = 0;

    while (i < p.length) {
        steps += 1;
        c -= p[i]
        if (c < p[i+1]) {
            steps += (2 * (i + 1));
            i += 1;
            c = capacity;
        } else {
            i += 1;
        }
    }
    
    return steps; 
};