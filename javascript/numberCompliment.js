//from leetcode easy: https://leetcode.com/problems/number-complement

var findComplement = function(num) {
    //set the variables to manipulate
    const n = num.toString(2);
    const a = n.split("");
    
    //loop a and swap as you go
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "0") {
            a[i] = "1";
        } else {
            a[i] = "0";
        }
    }
    return parseInt(a.join(""), 2);    
};

//PSEUDO:
//n = num.toString(2);
//a = n.split("");
//loop a
//swap as you go
//return a.join("");
