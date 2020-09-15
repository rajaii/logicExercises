//from leetcode medium https://leetcode.com/problems/zigzag-conversion/


var convert = function(s, numRows) {
    if (numRows < 2) {
        return s
    }
    //set the to be 2d array and the counter and boolean 
    let arr = [];
    let arrCounter = 0;
    let goBackwards = false;
    
    //loop to numrows pushing empty arrays into arr
    for (let i = 0; i < numRows; i++) {
        arr[i] = [];
    }
    
    //loop s and add s[i] int arr accordingly both setting and using the goBackwards and 
    //arrCounter to cause the zigzag push pattern
    for (let i = 0; i < s.length; i++) {
        arr[arrCounter].push(s[i]);
        
        if (arrCounter === numRows - 1) {
            goBackwards = false;
        }
        
        if (arrCounter === 0) {
            goBackwards = true;
        }
        
        if (goBackwards === false) {
            arrCounter -= 1;
        } else {
            arrCounter += 1;
        }
        
    }
    
    //set a string and concatenate each arr value's join in there and then return the string
    let retStr = '';
    for (let i = 0; i < arr.length; i++) {
        retStr += arr[i].join('');
        
    }

    
    return retStr;
};

//edge cases: emtpy str? string with length 1, 
//?'s: limits on time/space? 

//make a 2d array
//let arr = []
//set arrCounter = 0
//let goBAckwards = false
//loop to numrows and push an empty array into arr
//push accordingly into the 2d arr
//loop string and push string[i] into arr[arrCounter]
//if arrCounter = numRows - 1
//goBackwards = false
//if arrCounter = 0 
//goBackwards = true
//if gobackwards === false
//arrCounter -= 1
//else
//arrCounter += 1

//loop arr
//arr[i].join('')
//let retStr = ''
//loop arr
//retStr += arr[i]
//return retStr
