//  from leetcode easy: https://leetcode.com/problems/find-lucky-integer-in-an-array

var findLucky = function(a) {
    //edge cases
    if (a.length === a[0] && a.every(n => n === a[0])) {
        return a[0];
    }
    
    //set up memory and sort a
    a.sort()
    const luckys = [];
    let count = 0;

    //loop a and push into luckys if lucky
    for (let i = 0; i < a.length; i++) {
        if (i > 0 && count > 0 && a[i] !== a[i-1]) {
            if (count === a[i-1]) {
            luckys.push(count)
            count = 1;
            } else {
            count = 1;
            }
        } else if (i === 0 && a[i] !== a[i+1] && a[i] === 1) {
            luckys.push(1);
        } else if (i === (a.length - 1) && a[i] === a[i-1]) {
            console.log('in')
            count += 1;
            if (count === a[i]) {
                luckys.push(count);       
            }
        }  else {
            count += 1;
        }

    }
    let x = Math.max(...luckys);
    if (x === -Infinity) {
        return -1
    } 
    return x;
};

//PSEUDO
//edge cases

//a.sort()
//const luckys = [];
//let count = 0;
//loop a
//if (i > 0 && count > 0 && a[i] !== a[i-1] && restarted) {
//if (count === a[i-1]) {
//luckys.push(count)
//count = 0;
//} else {
//count = 0;
//}
//} else if (i === 0 && a[i] !== a[i+1] && a[i] === 1) {
//luckys.push(1);
//} else {
//count += 1;
//}

//out of loops
//return Math.max(...luckys)


//refactor after study:
//make hash table of the form {n[i]: count}
//filter the ones where the property === the value into an array
//return max of that array


var findLucky = function(a) {
    let obj = {};
    let luckies = [];
    
    //make object of the form {n[i]: count}
    for (let i = 0; i < a.length; i++) {
        if (obj[a[i]] === undefined) {
            obj[a[i]] = 1;
        } else {
            obj[a[i]] += 1;
        }
    }
    
    //filter the object for ones where key === value
    for (let key in obj) {
        if (parseInt(key) === obj[key]) {
            luckies.push(obj[key]);
        }
    }
    
    return luckies.length === 0 ? -1 : Math.max(...luckies);
    
}