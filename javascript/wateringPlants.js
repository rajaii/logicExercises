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