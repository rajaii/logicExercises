//from leetcode easy: https://leetcode.com/problems/finding-3-digit-even-numbers/

var findEvenNumbers = function(d) {
    //tag possibles in an array
    const possibles = [];
    
    for (let i = 0; i < d.length; i++) {
        if (d[i] === 0) {
            continue;
        } 
        for (let j = 0; j < d.length; j++) {
            if (j === i) {
                continue;
            }            
            for (let k = 0; k < d.length; k++) {
                if (k === i || k === j) {
                    continue;
                }
                const one = d[i];
                const two = d[j];
                const three = d[k];
                const x = parseInt(one.toString().concat(two.toString()).concat(three.toString()));
                possibles.push(x);           
            }
        }
    }
   
    const finals = [];
    //loop possibles and push evens into finals
    for (let i = 0; i < possibles.length; i++) {
        if (possibles[i] % 2 === 0) {
            finals.push(possibles[i]);
        }
    }
    
    const finObj = {};
    //make finObj of the type {finals[i]: count}
    for (let i = 0; i < finals.length; i++) {
        if (finObj[finals[i]] === undefined) {
            finObj[finals[i]] = 0;
        } else {
            finObj[finals[i]] += 1;
        }
    }

    const answer = [];
    //loop finObj and push into answer all keys that have a value of 0
    for (let key in finObj) {
        answer.push(parseInt(key))
    }
    
    return answer.sort((a,b) => a - b);
    
    
};

//PSEUDO:

//const possibles = [];
//[2,1,3,0]
//[2,1,3,0]
//[2,1,3,0]
//[213,230,203,231,201,210,,]

//for (let i = 0; i < d.length; i++) {
//for (let j = 0; j < d.length; j++) {
//if (j === i) {
//continue;
//}
//for (let k = 0; k < d.length; k++) {
//if (k === i) {
//continue;
//}
//}
//}
//}

// const one = digits[i];
// const two = digits[j];
// const three = digits[j+1];
// const x = parseInt(one.toString().concat(two.toString()).concat(three.toString()));
//possibles.push(x);

//