//from leetcode medium: https://leetcode.com/problems/the-k-strongest-values-in-an-array/

var getStrongest = function(arr, k) {
    //handle edge cases
    if (arr.length === 1 || k === arr.length) {
        return arr;
    }
    
    //set variables that will be needed
    let m;
    let verObj = {};
    let kStrongest = [];
    let duplicates = [];
    
    //find the median of arr
    if (arr.length % 2 === 0) {
        m = (arr[(arr.length / 2 + 1) -1] + arr[(arr.length / 2) - 1]) / 2;
    } else {
        m = arr[(arr.length - 1) / 2];
    }
    console.log('m', m)
    //loop arr and ser verObj[arr[i]] = the abs value of arr[i] - m
    for (let i = 0; i < arr.length; i++) {
        if (verObj[arr[i]] != undefined) {
            let o = {};
            o[arr[i]] = Math.abs(arr[i] - m);
            duplicates.push(o);
        } 
        verObj[arr[i]] = Math.abs(arr[i] - m);
        
        
    }
    console.log('duplicates: ', duplicates)
    console.log('verObj: ', verObj)
    
    //loop to k and for each i take the key of the highest verObj value and push into           //kStronest, and then remove that particular key,value pair from verObject, repeating       //until the loop is done
    let highest = 0;
    let highestVal = 0;
    for (let i = 0; i < k; i++) {
        for (let key in verObj) {
            if (verObj[key] > highest && duplicates.filter(o => Object.keys(o)[0] === key ).length === 0) {
                highest = key;
            } else if (verObj[key] > highest && duplicates.filter(o => Object.keys(o)[0] === key ).length > 0) {
                if (duplicates.filter(o => Object.keys(o)[0] === key )[0] > key) {
                    console.log(duplicates.filter(o => Object.keys(o)[0] === key )[0])
                    highest = Object.keys(duplicates.filter(o => Object.keys(o)[0] === key )[0])[0];
                } else {
                    highest = key;
                }
            } 
            
            else {
                continue;
            } 
        }
        
        kStrongest.push(highest);
        delete verObj[highest];
        highest = 0;
    }
    
    return kStrongest;
    
};

//edge cases: arr length === 1 or 2
//?'s: limits on time/space, will there be duplicates in arr

//sort arr
//set m
//set verObj1 = {}
//set kStrongest = []
//if arr.length % 2 = 0
//m = (arr[(arr.length / 2 + 1) -1] + arr[(arr.length / 2) - 1]) / 2
//else
//m = arr[arr.length - 1 / 2]

//loop arr and for each arr[i]
//verObj[arr[i]] = Math.abs(arr[i] - m)

//loop to k and for each 1 take the key of the highest verObj value, and then remove that //particular key,value pair from verObject, repeating until the loop is done

//loop to k
//let highest;
//loop verObj
//if (verObj[key] > highest) {
//highest = key
//} else 
//continue
//out of loop
//kStrongest.push(highest)
//delete verObj[highest]

//return kStrongest


//arr = [1,1,3,5,5], k = 2 m = 3
//{1: 2, 
//1: 2,
//3: 0,
//5: 2
//5: 2
//}