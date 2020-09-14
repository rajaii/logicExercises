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