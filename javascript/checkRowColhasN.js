// from leetcode easy: https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers

var checkValid = function(m) {
    const n = [];
    for (let i = 0; i < m.length; i++) {
        n.push(i+1);
    }
    
    //. set n and populate
    const m2 = [[]];
    //make m2 basically all the cols of n as rows so you can sort and run same loop below on
    for (let i = 0; i < m.length; i++) {
        for (let j = 0; j < m[i].length; j++) {
            m2[m2.length - 1].push(m[j][i]);
            if (j === m.length - 1) {
                m2.push([]);
            }
        }
    }
    m2.pop();
    
    //. sort all in m and m2
    m.forEach(a => a.sort((a,b) => a - b))
    m2.forEach(a => a.sort((a,b) => a - b))
    
    //run loops to check
    while (m.length > 0) {
        for (let i = 0; i < m[m.length - 1].length; i++) {
            if (m[m.length - 1][i] === n[i]) {
                if (i === m[m.length - 1].length -1) {
                    m.pop();
                    break;
                }
            } else {
                return false;
            }
        }
    } 
    
     while (m2.length > 0) {
        for (let i = 0; i < m2[m2.length - 1].length; i++) {
            if (m2[m2.length - 1][i] === n[i]) {
                if (i === m2[m2.length - 1].length -1) {
                    m2.pop();
                    break;
                }
            } else {
                return false;
            }
        }
    } 
    
    return true;
};



//edge case:
//if (n > m.length) {
//return false;
//}

//set n = [];
//loop to the length of m[0]
//n.push(i+1)

//make m2
//for (let i = 0; i < m.length; i++) {


//sort them all
//let j = 0;
//while (m.length > 0) {
//for (let i = 0; i < m[m.length - 1].length  ; i++) {
//if (m[m.length - 1][i] === n[i]) {
// if (i === m[m.length - 1].length ) {
//m.pop();
//}
//} else {
//return false;
//}
//}
//} 
//out of loop:
//return true;




//loop twice once going on colums once on rows
