//  from leetcode easy: https://leetcode.com/problems/capitalize-the-title

var capitalizeTitle = function(t) {
    //split titile and map it to split the inner strings
    const s = t.split(" ");
    
    const m = s.map(st => st.split(""));
    
    //double loop map and change accordingly
    for (let i = 0; i < m.length; i++) {
        if (m[i].length <= 2) {
            for (let j = 0; j < m[i].length; j++) {
               m[i][j] = m[i][j].toLowerCase();
            }
        } else {
            for (let j = 0; j < m[i].length; j++) {
                if (j === 0) {
                    m[i][j] = m[i][j].toUpperCase();
                } else {
                    m[i][j] = m[i][j].toLowerCase();
                } 
            }
        }     
    }
    
    //loop map and join and the return joinedMap.join(" ")
    const joinedMap = m.map(a => a.join(""));
    
    return joinedMap.join(" ");
    
};


//PSEUDO:
//make 2 objects: lower to upper, and upperToLower

//split title
//map split and split each inner

//double loop map and change accordingly

//set retStr
//loop map and join
//return joinedMap.join(" ");