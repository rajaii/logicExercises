//from leetcode easy https://leetcode.com/problems/unique-email-addresses/


var numUniqueEmails = function(emails) {
    let emailSet = new Set();
       
    for (let i = 0; i < emails.length; i++) {
        let newStr; 
        let plusIndex = emails[i].indexOf('+');
        let atIndex = emails[i].indexOf('@');
        
        if (plusIndex != -1) {
            newStr = emails[i].substring(0, plusIndex)
            newStr += emails[i].substring(atIndex)
        }
        let newAtIndex;
        if (newStr != undefined) {
         newAtIndex = newStr.indexOf('@')
        } else {
            newAtIndex = atIndex
        }
        for (let j = 0; j < newAtIndex; j++) {
           //ab. c@def.com
            //atIndex is 4; j;2
            //newStr = abc @def.com
            // newAtIndex 3
            
            if (j === newAtIndex - 1 && newStr != undefined) {
                if (emails[i][j] != '.') {
                emailSet.add(newStr);
                break;
                } else {
                   newStr = newStr.replace('.', '');
                   emailSet.add(newStr);
                   break;
                }
            } else if (j === newAtIndex - 1 && newStr === undefined) {
                if (emails[i][j] != '.') {
                emailSet.add(emails[i]);
                break;
            } else {
                newStr = emails[i].replace('.', '');
                emailSet.add(newStr);
                break;
            } 
            }
            
            else {
                if (emails[i][j] === '.' && newStr === undefined) {
                    newStr = emails[i].replace('.', '');
                    
                    if (newAtIndex - 1 === j+1 || newAtIndex - 1 === j) {
                        emailSet.add(newStr);
                        break;
                    } 
                    
                    newAtIndex -= 1;
                   
                    
                } else if (emails[i][j] === '.' && newStr != undefined) {
                    newStr = newStr.replace('.', '');
                    
                    if (newAtIndex - 1 === j+1 || newAtIndex - 1 === j) {
                        emailSet.add(newStr);
                        break;
                    } 
                    
                    newAtIndex -= 1
                    
                    
                }
                
            }
        }
    }
    
    
    console.log(emailSet)
    return emailSet.size
    
};

//?'s: limits on time/space
//edge cases: 1 email, return 1 



//loop through emails
//correct each email and then add into set
    //loop each email
    //let newStr;
    //if emails[i][j] === '.'
    //replace'.' with ''
    //run above all else in the else
    //if emails[i][j] === '+'
    //newStr 
    //newStr = newStr.splice(emails)
    //if emails[i][j] === '@'
    //newStr = 
    //break



//can remove .'s remove + until @
//go through and push the updated emails into a set
//return the size of the set

//?'s: limits on time/space
//edge cases: 1 email, return 1 



//loop through emails
//correct each email and then add into set
    //loop each email
    //let newStr;
    //if emails[i][j] === '.'
    //replace'.' with ''
    //run above all else in the else
    //if emails[i][j] === '+'
    //newStr 
    //newStr = newStr.splice(emails)
    //if emails[i][j] === '@'
    //newStr = 
    //break



//can remove .'s remove + until @
//go through and push the updated emails into a set
//return the size of the set

console.log(str.replace('.', ''))