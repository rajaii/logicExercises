//from leetcode easy:https://leetcode.com/problems/license-key-formatting

var licenseKeyFormatting = function(s, k) {
    //handle edge cases
    if (s.length === 1) {
        if (s[0] === "-") {
            return "";
        }
        return s.toUpperCase();
    }
    
    //set the array to push to  and counter
    const st = [];
    let counter = 0;
    
    //loop s backwards and push to s accordingly 
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === '-') {
            continue;
        }
        
        st.push(s[i].toUpperCase());
        
        counter += 1;
        if (counter === k) {
            st.push("-");
            counter = 0;
        }
    }
    
    while (st[st.length - 1] === "-") {
        st.pop();
    }
    
    return st.reverse().join("")
};


//PSEUDO: 
//let s = [];
//set counter = 0;
//loop s backwards
//skip "-"
//push into s as you traverse 
//counter += 1;
//if (counter === k) {
//s.push("-");
//}

//return s.reverse().join('');