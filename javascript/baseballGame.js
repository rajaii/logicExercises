//from leetcode easy https://leetcode.com/problems/baseball-game/

var calPoints = function(ops) {
    //set the record array to keep track
    const record = [];
    
    //loop ops running the operations and pushing into record as it iterates
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "+") {
            const s = record[record.length-1] + record[record.length-2];
            record.push(s); 
        } else if (ops[i] === "D") {
            const d = record[record.length-1]*2;
            record.push(d);
        } else if (ops[i] === "C") {
            record.pop();
        } else {
            record.push(parseInt(ops[i]))
        }
       
    }
    
    return record.reduce((a, c) => a + c, 0);
    
};

//edge cases: one op, one op that is not a number
//?'s: limits on time/space?  return in string format or number format?

//PSEUDO:
//set record = [];
//loop ops

//if (parseInt(ops[i]) !== NAN):
//record.push(parseInt(ops[i])

//else if (ops[i] === "+"):
//record.push(record[record.length-1] + record[record.length-2])

//else if (ops[i] === "D"):
//record.push(record[record.length-1]*2)

//else if (ops[i] === "C"):
//record.pop()

//return Math.sum(...record)