//from leetcode easy: https://leetcode.com/problems/mean-of-array-after-removing-some-elements/

var trimMean = function(arr) {
    arr.sort((a,b) => a - b);
    
    //find out the smallest and largest 5%
    const whole = arr.length;
    const five = .05 * whole;
    const avgArr = []; 
    
    //push smallest and largest 5% into avgArr
    let index;
    if (five % 1 === 0) {
        index = five;
    } else {
        index = Math.ceil(five);
    }
    for (let i = index; i < (arr.length - index); i++) {
        avgArr.push(arr[i]);
    } 
    
    return avgArr.reduce((a,c) => a+c , 0) / avgArr.length;
};

//find the smallest and largest 5% based off of index

//reduce on the slice of arr without the top and bottom 5%

//Refactor after study:

var trimMean = function(arr) {
    arr.sort((a,b) => a - b);
    
    //find out the smallest and largest 5%
    const topBot = arr.length * .05;
    
    //push smallest and largest 5% into avgArr
    for (let i = 0; i < topBot; i++) {
        arr.pop();
        arr.shift();
    }
    
    return arr.reduce((a,c) => a+c , 0) / arr.length;
};