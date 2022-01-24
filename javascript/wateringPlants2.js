//from leetcode medium: https://leetcode.com/problems/watering-plants-ii

var minimumRefill = function(p, capA, capB) {
    //case of 1 plant
    if (p.length === 1) {
        if (capA >= p[0] || capB >= p[0]) {
            return 0;
        } else {
            return 1;
        }
    }   
    if (p.length === 2 && capA >= p[0] && capB >= p[1]) {
        return 0;
    }
          
    //set i, and j for the loop, and c to count watering times
    let i = 0;
    let j = p.length - 1;
    let a = capA;
    let b = capB;
    let c = 0;
    
    //set the condition for the loop in even vs odd cases
    let condition = j >= i;
    if (p.length % 2 === 0) {
        condition = (j > i);
    }

    
    //loop incrementing i and decrementing j and keep count of watering times as proceeded
    while(condition) {
        a -= p[i];
        b -= p[j];
        if (condition === (j > 1) && j === (i+1)) {
            break;
        }     
        if (condition === (j >= i) && j === (i+2)){
            if (a < p[i+1] && b < p[j-1]) {
                c += 1;
                break;
            } else if (a >= p[i+1] || b >= p[j-1]) {
                if (capA >= p[i+1] && capB < p[j -1] && a < p[i+1]) {
                    c += 1;
                    break
                } else if (capB >= p[i+1] && capB < p[j -1] && b < p[i+1]){
                    c += 1; 
                    break;
                } else {
                    break;
                }
            }
        }       
        if (a < p[i + 1] && b < p[j - 1]) {
            c += 2;
            a = capA;
            b = capB;
            i += 1;
            j -= 1;
        } else if (a < p[i + 1] && b >= p[j - 1]) {
            c += 1;
            a = capA;
            i += 1;
            j -= 1;
        } else if (a >= p[i + 1] && b < p[j - 1]) {
            c += 1;
            b = capB;
            i += 1;
            j -= 1;
        } else {
            i += 1;
            j -= 1;
        }         
    }   
    return c;      
};
//even vs odd length of p

//PSEUDO:
//set i, and j for the loop, and c to count watering times
//let i = 0;
//let j = p.length - 1;
//let a = capA;
//let b = capB;
//let c = 0;

//let condition = j >= i;
//if (p.length % 2 === 0) {
    //condition = (j > i);
//}

//still need cases for last plant if they on it together or break if they can hit it before 

//while (condition)
//in loop:
//before if /else clauses:
    //a -= p[i];
    //b -= p[j];

//[2,2,4,3,3]

//case to end mentioned on line 19 before all other logic
//if (condition === (j >= i) && j === (i+1)){
    //if (a < p[i+1] && b < p[j-1]) {
        //count += 1;
        //break;
    //} else if (a >= p[i+1] || b >= p[j-1]) {
        //break;
    //}

//}


 

//if (a < p[i + 1] && b < p[j - 1]) {
//c += 2;
//a = capA;
//b = capB;
//i += 1;
//j -= 1;
//} else if (a < p[i + 1] && b >= p[j - 1]) {
//c += 1;
//a = capA;
//i += 1;
//j -= 1;
//} else if (a >= p[i + 1] && b < p[j - 1]) {
//c += 1;
//b = capB;
//i += 1;
//j -= 1;
//}

//out of loop:
//return c