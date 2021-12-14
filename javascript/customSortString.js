// from leetcode medium https://leetcode.com/problems/custom-sort-string

var customSortString = function(o, s) {
    //set the objects to pull order from
    const oObj = {};
    const sObj = {};
    
    for (let i = 0; i < o.length; i++) {
        oObj[o[i]] = i;
    }
    
    for (let i = 0; i < s.length; i++) {
        if (sObj[oObj[s[i]]] === undefined) {
            sObj[oObj[s[i]]] = [s[i]];
        } else {
            sObj[oObj[s[i]]].push(s[i]);
        }
    }
    
    //get the orders by using the keys of sObj pushing [key, sObj[key]] into sObj and sorting by key
    //then loop sorted order and fin.concat(order[i][1]);
    const order = [];
    let fin = [];
    
    for (let key in sObj) {
        order.push([key, sObj[key]]);
    }
    
    order.sort((a,b) => a[0] - b[0])
    
    for (let i = 0; i < order.length; i++) {
        fin = fin.concat(order[i][1]);
    }
    
    return fin.join("");
};

//set an oObj of the form {o[i]: i}
//set an sObj of the form {oObj[s][i]: [s[i]]}
    //loop s
    //if sObj[oObj[s][i]] === undefined
    //sObj[oObj[s][i]] = [s[i]];
    //sObj[oObj[s][i]].push(s[i])

//const order = []
//fin = []
//loop sObj and 
//push into order [key, sObj[key]]
//sort order by key
//loop order 
//fin.concat(order[i][1])

//return fin.join("")
