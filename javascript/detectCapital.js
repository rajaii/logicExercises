//from leetcode easy: https://leetcode.com/problems/detect-capital

var detectCapitalUse = function(w) {
    //handle edge cases
    if (w.length === 1) {
        return true;
    }
    
    if (w.length === 2) {
        if (w[0].toLowerCase() === w[0] && w[1].toUpperCase() === w[1]) {
            return false;
        } else {
            return true;
        }
    }
    
    //run logic based off of first chars to determine how to loop, and then loop and check
    if (w[0].toUpperCase() !== w[0]) {
        //is lower case so loop and if all are not lower case return false
        for (let i = 1; i < w.length; i++) {
            if (w[i].toUpperCase() === w[i]) {
                return false;
            }
        }
        return true;
    } else if (w[0].toUpperCase() === w[0] && w[1].toUpperCase() === w[1]) {
        //both 1 and 2 are capital so loop and if any isnt cap return false
        for (let i = 2; i < w.length; i++) {
            if (w[i].toLowerCase() === w[i]) {
                return false;
            }
        }
        return true;
    } else {
        //loop starting at 1 and if any isn't lower return false
        for (let i = 1; i < w.length; i++) {
            if (w[i].toUpperCase() === w[i]) {
                return false;
            }
        }
        return true;
    }
};

//PSEUDO:
//if (w[0].toUpperCase() !== w[0]) {
//is lower case so:
//loop and if all are not lower case return false
//} else if (w[0].toUpperCase() === w[0] && w[1].toUpperCase() === w[1]) {
//both 1 and 2 are capital so loop and if any isnt cap return false
//} else {
//loop starting at 1 and if any isn't lower return false
//}

//return true out of all the loops