//from leetcode medium: https://leetcode.com/problems/statistics-from-a-large-sample/

var sampleStats = function(count) {
    //make object to track the numbers and their occurrences
    let countObj = {};
    for (let i = 0; i < count.length; i++) {
            if (count[i] != 0) {
            countObj[i] = count[i];
            }
    }
    
    //caculate stats
    let min = Math.min(...Object.keys(countObj));
    let max = Math.max(...Object.keys(countObj));
    let amts = []
    let iter = 0;
    for (let key in countObj) {
        amts[iter] = parseInt(key, 10) * countObj[key];
        iter += 1;
    }
  
    let sum = amts.reduce((a,c) => a+c, 0);
    
    let divisor = Object.values(countObj).reduce((a,c) => a+c, 0);
    let mean = sum / divisor;
   
    let medArr = [];
    for (let key in countObj) {
        for (let i = 0; i < countObj[key]; i++) {
            medArr.push(parseInt(key, 10));
        }
    }
    medArr.sort((a, b) => a - b);
    console.log(medArr)
    let median;
    if (medArr.length % 2 === 0) {
        median = (medArr[medArr.length / 2 - 1] + medArr[medArr.length / 2]) / 2;
    } else {
        median = medArr[Math.floor(medArr.length / 2)];
    }
    console.log(median)
    let modeVal = Math.max(...Object.values(countObj));
    let mode;
    for (let key in countObj) {
        if (countObj[key] === modeVal) {
            mode = parseInt(key, 10);
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


