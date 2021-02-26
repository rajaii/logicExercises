//from leetcode easy:


var reformatNumber = function(number) {
    //set the variable strings to manipulate number and concat to
    const n1 = number.split('-');
    const preAns = [];
    const aft = [];
    let n = '';
    let ans = ''; 
     
    //loop n1 and concat all non spaces to n
    for (let i = 0; i < n1.length; i++) {
        if (n1[i].split(' ').length > 1) {
          let y = n1[i].split(' ');
          y.forEach(n => aft.push(n))  
        } else {
        aft.push(n1[i]);
        }
    }
    
    for (let i = 0; i < aft.length; i++) {
        preAns.push(aft[i].split(''))
    }
    
    
    for (let i = 0; i < preAns.length; i++) {
        for (let j = 0; j < preAns[i].length; j++) {
            n += preAns[i][j];
        }
    }
    
    //loop n and concat according to spec
    for (let i = 0; i < n.length; i += 3) {
        if (n.slice(i).length <= 4) {
            if (n.slice(i).length === 4) {
                ans += `${n[i]}${n[i+1]}-${n[i+2]}${n[i+3]}`;
                break;
            } else if (n.slice(i).length === 3) {
                ans += `${n[i]}${n[i+1]}${n[i+2]}`;
                break;
            } else if (n.slice(i).length === 2) {
                ans += `${n[i]}${n[i+1]}`;
                break;
            }
        } else {
            ans += `${n[i]}${n[i+1]}${n[i+2]}-`;
        }

    }
    
    return ans;
};

//edge cases: length 2, 
//?'s: limit on time/space? double spaces?

//PSEUDO:
//const n1 = number.split('-');
//let n = '';

//let ans = '';
//loop n1 and concat all non " " (account for all lengths) to n

//if (n[i].includes)

//loop n (i += 3) and 
//if (n.slice(i).length <= 4)
//if (n.slice(i).length === 4)
//ans += `${n[i]}${n[i+1]}-${n[i+3]}${n[i+4]}`
//break

//if (n.slice(i).length === 3)
//ans += `${n[i]}${n[i+1]}${n[i+2]}`
//break

//if (n.slice(i).length === 2)
//ans += `${n[i]}${n[i+1]}`
//break

//return ans