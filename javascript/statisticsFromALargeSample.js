// //from leetcode medium: https://leetcode.com/problems/statistics-from-a-large-sample/

var sampleStats = function(count) {
    //make object to track the numbers and their occurrences
    let countObj = {};
    for (let i = 0; i < count.length; i++) {
            if (count[i] != 0) {
            countObj[i] = count[i];
            }
    }
    
    //caculate stats
    const min = Math.min(...Object.keys(countObj));
    const max = Math.max(...Object.keys(countObj));
    const amts = []
    let iter = 0;
    for (let key in countObj) {
        amts[iter] = parseInt(key, 10) * countObj[key];
        iter += 1;
    }
  
    const sum = amts.reduce((a,c) => a+c, 0);
    
    
    const divisor = Object.values(countObj).reduce((a,c) => a+c, 0);
    const mean = sum / divisor;
   
    const modeVal = Math.max(...Object.values(countObj));
    let mode;
    for (let key in countObj) {
        if (countObj[key] === modeVal) {
            mode = parseInt(key, 10);
        }
     }
    let countSum = count.reduce((a,c) => a+c,0);
    
    let median;
    let even = false;
    let odd = false;
    let medIndex;
    let medIndexA;
    let medIndexB;
    if (countSum % 2 === 0) {
        even = true;
        medIndexA = countSum / 2;
        medIndexB = (countSum / 2) + 1;
    } else {
        odd = true;
        medIndex = Math.ceil(countSum / 2);    
     }
    
    let c = 0;
    let oldCount = 0;
    for (let i = 0; i < count.length; i++) {
        if (count[i] > 0) {
            c += count[i];
            console.log('medIndex', medIndex);
            console.log(medIndex > oldCount)
            console.log('old',oldCount)
            console.log(medIndex <= c)
            console.log('c',c)
            if (odd && medIndex != undefined && medIndex > oldCount && medIndex <= c) {
                median = i;
                break;
            } else if (even && medIndexB != undefined && medIndexA != undefined && medIndexA === c - count[i] && medIndexB === ((c - count[i]) + 1)) {
                console.log('in')
                median = ((i - 1) + i) / 2;
                break;
            } else if (even && medIndexB != undefined && medIndexA != undefined && medIndexA > oldCount && medIndexA <= c && medIndexB > oldCount && medIndexB <= c ) {
            median = i;
            break;
            } else {
                oldCount += count[i];
            } 
        }
    }
   
    
    
    //convert into floats of form 10 ^ -5 limit
    return [min.toFixed(5), max.toFixed(5), mean.toFixed(5), median.toFixed(5), mode.toFixed(5)]
    
};

//edge cases:all one number (depending onwhat is meant by unique in the constraint, all same //then last one or few different,  
//?'s:  does unique on the mode mean that there will be other nums, or that the countof it will //be unique?  why is 1 the minimum in example 1 and not 0?  limits on time/space?  

//Pseudo:
//make an object of form i: count[i] but only if > 0
//calculate the stats
//convert stats to floats of 10^-5 using toFixed(5)
//return array with the floats of stats

function arb (i) {
    console.log(i)
}

arb('hi') * 3;
