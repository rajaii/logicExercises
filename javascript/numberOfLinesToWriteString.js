//  from leetcode easy: https://leetcode.com/problems/number-of-lines-to-write-string

var numberOfLines = function(widths, s) {
    //set the res array and pixel count in memory
    const res = [1];
    let count = 0;
    
    //make an object out of widths
    let w = {'a': widths[0],
             'b': widths[1],
             'c': widths[2],
             'd': widths[3],
             'e': widths[4],
             'f': widths[5],
             'g': widths[6],
             'h': widths[7],
             'i': widths[8],
             'j': widths[9],
             'k': widths[10],
             'l': widths[11],
             'm': widths[12],
             'n': widths[13],
             'o': widths[14],
             'p': widths[15],
             'q': widths[16],
             'r': widths[17],
             's': widths[18],
             't': widths[19],
             'u': widths[20],
             'v': widths[21],
             'w': widths[22],
             'x': widths[23],
             'y': widths[24],
             'z': widths[25],
  
            }
    
    //loop s counting pixels and lines and iterating the resArray and pushing at end
    for (let i = 0; i < s.length; i++) {
        count += w[s[i]];
        if (i === s.length - 1){
        if (count > 100) {
            res[0] += 1;
            res.push(w[s[i]]);
            break;
        } else if (count === 100) {
            res.push(count);
            break
        } else {
            res.push(count);
        }
        }
        if (count > 100) {
            res[0] += 1;
            count = w[s[i]];
            continue;
        } else if (count === 100) {
            res[0] += 1;
            count = 0;
            continue;
        }
    }
    
    return res;
};

//edge cases: at end and over 100
//PSEUDO:
//set res = [0]
//set count;
//loop s
//count += w[s[i]];
//if (i === s.length - 1){
//if (count >= 100) {
//res[0] += 1
//res.push(w[s[i]])
//break;
//} else {
//res.push(count);
//}
//}
//if (count >= 100) {
//res[0] += 1
//count = w[s[i]];
//continue;
//}
