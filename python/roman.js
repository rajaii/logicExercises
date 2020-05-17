//from leetcode
var romanToInt = function(s) {
    //ifs to handle six subtraction cases
    if (s === 'IV') {
        return 4
    } else if (s === 'IX') {
        return 9
    } else if (s === 'XL') {
        return 40
    } else if (s === 'XC') {
        return 90
    } else if (s === 'CD') {
        return 400
    } else if (s === 'CM') {
        return 900
    }
    
    //vars
    const romans = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    const sArr = s.split('')
    const numArr = []
    let num = 0
    //loop through array and see if sArr[i] === romans and add accordingly
    for (let i = 0; i < sArr.length; i++) {
        
        
        if (sArr[i] === 'V' && sArr[i-1] === 'I' || sArr[i] === 'X' && sArr[i-1] === 'I') {
            
        num += romans[sArr[i]]
        console.log(`added ${romans[sArr[i]]}`)
            
           num -= 2
            console.log(`subtracted 2`)
            
        }
        else if (sArr[i] === 'L' && sArr[i-1] === 'X' || sArr[i] === 'C' && sArr[i-1] === 'X') {
            
        num += romans[sArr[i]]
        console.log(`added ${romans[sArr[i]]}`)
           
           num -= 20
            console.log(`subtracted 20`)
            
        }
        else if (sArr[i] === 'D' && sArr[i-1] === 'C' || sArr[i] === 'M' && sArr[i-1] === 'C') {
            
        num += romans[sArr[i]]
        console.log(`added ${romans[sArr[i]]}`)
            
           num -= 200
           console.log(`subtracted 200`)
            
        } else {
        
        num += romans[sArr[i]]
        console.log(`out of loop added ${romans[sArr[i]]}`)
    }}
    console.log(num)
    return num
};

//U:
//P:
//make object with romans
//break s into arr
//iterate through array running math logic in if statements search dict for highest value, and 
//subtract/add and figure out number based on what is to right or left of it (six instances can use ifs to tag these and just add otherwise?)
//figure out num and return


//R
//can optimize both time and space by writing a more clean cut algorithm that loops and handles all cases in the loop