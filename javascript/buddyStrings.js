//from leetcode easy: https://leetcode.com/problems/buddy-strings

var buddyStrings = function(string, g) {
    if (string.length !== g.length) {
        return false;
    }
    const s = string.split("");
    const goal = g.split("");
    
    //loop s and count amount of not equals and if  > 2 return false
    let amt = 0; 
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            amt += 1;
        }
    }
    
    if (amt > 2 || amt === 1) {
        return false;
    } 
    
    //else: tg index's for diffs 
    let index1;
    let index2;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i] && index1 === undefined) {
        index1 = i;
        } else if (s[i] !== goal[i] && index2 === undefined) {
        index2 = i;
        }
    }

    //if 2 diffs, swap and see if s === goal
    if (index2 !== undefined && index1 !== undefined) {
    let temp = s[index1]
    s[index1] = s[index2]
    s[index2] = temp
        if (s.join("") === goal.join("")) {
        return true;
    } else {
        return false;
    }
    }
    
    //if no diffs count for repeats and return true if so false if not
    const sObj = {};
    for (let i = 0; i < s.length; i++) {
        if (sObj[s[i]] !== undefined) {
            sObj[s[i]] += 1;
        } else {
            sObj[s[i]] = 1;
        }
    }
   
    for (let key in sObj) {
        if (sObj[key] > 1) {
            return true;
        }
    }
       
    return false;
    
};

//PSEUDO:
//set amt = 0;
//loop  s and count amt of equals

//if (amt > 2) {
//return false
//}
//"abceee""abceee"
//let index1;
//let index2;

//loop s:
//if (s[i] !== goal[i] && index1 === undefined) {
//index1 = i;
//} else if (s[i] !== goal[i] && index2 === undefined) {
//index2 = i
//}

//case where 2diff:
//if (index2 && index1) {
//let temp = s[index1]
//s[index1] = s[index2]
//s[index2] = temp
//}

//if (s === goal) {
//return true;
//}

//case where 1 diff:
//loop s swapping everyting with that 1 and checking and ret true if === to goal, if not swap back and continue

//case where no diffs
//const sObj = {};
//loop s and make sObj of the form {
//s[i]: count
//}

//loop sObj.values and if any count > 1 ret true

//return false;