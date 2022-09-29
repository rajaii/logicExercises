var isAnagram = function(s, t) {
    
    //only run if === length strings, if not return false
    if (s.length === t.length) {
        //set an array with t elements
        let tArr = []
        for (let i = 0; i < t.length; i++) {
            tArr.push(t[i])
        }
        
        //loop s and check if t has s[i] in it
        //if so delete from tArr to account duplicates and continue, else return false
        //if it makes it through this loop the funtion will return true
        for (i = 0; i < s.length; i++) {
            if (tArr.includes(s[i])) {
                let j = tArr.indexOf(s[i])
                delete tArr[j]
                continue
            } else {
                return false
            }
        }
    } else {
        return false
    }
    
    return true
};

//edge cases: empty string, s.length = 1
//questions: limits on time/space? how to handle 2 empty's or .length === 1?

//
//if s.length === t.length:
//loop s:
//if tarr indcludes s[i]
//delete tArr[indexOf(s[i])]
//continue
// else ret false
//else ret false
//ret true

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    //count the letters in an object
    const sCounter = {};
    const tCounter = {};
    
    for (let i = 0; i < s.length; i++) {
        sCounter[s[i]] = sCounter[s[i]] + 1 || 1;
    }
    
     for (let i = 0; i < t.length; i++) {
        tCounter[t[i]] = tCounter[t[i]] + 1 || 1;
    }
    
    //then loop the objecct for s and compare 
    for (let key in sCounter) {
        if (sCounter[key] != tCounter[key]) {
            return false;
        }
    }
    
    
    return true;
    
    
};

//PSEUDO:

//count the letters in an object
//then loop the objecct for s and compare 
//if any count does not match or undefined => ret false

//out of loop ret true

//o(n) time o(n) space

//more eloqquent but o (n log n)

var isAnagram = function(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    
    return ((s === t) && true);
};