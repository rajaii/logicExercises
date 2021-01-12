//from leetcode easy https://leetcode.com/problems/distance-between-bus-stops/submissions/

var distanceBetweenBusStops = function(distance, start, destination) {
    //set the shortest distance variables to be iterated as the loops run
    let shortest1 = 0;
    let shortest2 = 0;
    
    
    //run two loops going backwards to 0 from start and then from len to destination
    //to account for the counterclockwise drive, and iterated shortest1 as it loops
    if (start < destination) {
    for (let i = start - 1; i >= 0; i--) {
        shortest1 += distance[i];
    }
    
    for (let i = distance.length - 1; i >= destination; i--) {
        shortest1 += distance[i];
    }
    
    //run a forward loop from start to destination iterating shortest2 as it loops
    for (let i = start; i < destination; i++) {
        shortest2 += distance[i];
    }
    } else {
        //fw from start
        for (let i = start; i < distance.length; i++) {
        shortest1 += distance[i];
    }
        for (let i = 0; i < destination; i++) {
        shortest1 += distance[i];
    }
    
        //bw from start
          for (let i = start - 1; i >= destination ; i--) {
        shortest2 += distance[i];
    }
    }
    
    if (shortest1 < shortest2) { 
        return shortest1;
    } else {
        return shortest2;
    }
};

//edge cases: distance.length === 1, 
//?'s: limits on time/space? 
//forwards count in start don't count dest backwards count in destingation don't count st

//PSEUDO:
//[1,2,3,4]d
//[0,1,2,3]stop

//set the shortest1;
//set shortest2;
//go counterclockwise use 2 loops run 1st back from start to 0 and break then from len to //0 and break iterating shortest1 as you go

//run a clockwise forward loop from start to destination iteration shortest2 as you go


//shortest1 < shortest2 ? return shortest1 : return shortest2