//from leetcode medium: https://leetcode.com/problems/the-k-strongest-values-in-an-array/

var getStrongest = function(arr, k) {
    //handle edge cases
    console.log(k)
    if (arr.length === 1 || k === arr.length) {
        return arr;
    }
    
    let kStrongest = [];
    if (arr.every(a => a === arr[0])) {
        for (let i = 0; i < k; i++) {
             kStrongest.push(arr[i])
        }
        return kStrongest
    } 
    
    //set variables that will be needed
    let m;
    let ver = [];
   
    //find the median of arr
    arr.sort((a,b) => a - b);
    if (arr.length % 2 === 0) {
        m = arr[Math.floor((arr.length-1)/2)];
    } else {
        m = arr[(arr.length - 1) / 2];
    }
    console.log('m', m)
    //loop arr and ser ver to have objects of form {arr[i]: |arr[i] - m|}
    for (let i = 0; i < arr.length; i++) {
        let o = {};
        o[arr[i]] = Math.abs(arr[i] - m);
        ver.push(o);
    }
    
    
    
    //sort ver firstly according to the val and if vals are === according to key
    ver.sort((a,b) => {
    let ak = Object.keys(a)[0]
    let av = Object.values(a)[0]
    let bk = Object.keys(b)[0]
    let bv = Object.values(b)[0]
    if (av === bv) {
        return ak - bk;
    } 
    return av - bv
})
    
    //loop ver backwards k times and push each key into kStrongest 
    let i = k;
    let inc = ver.length - 1; 
    while (i > 0) {
      kStrongest.push(Object.keys(ver[inc])[0]);
      i--;
      inc--;
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

//kstr = []
//arr = [1,1,3,5,5], k = 2 m = 3
//dupl = [{1:2},{5,2}]
//{1: 2, 
//1: 2,
//3: 0,
//5: 2
//5: 2
//}