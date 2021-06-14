//  from leetcode easy:  https://leetcode.com/problems/shortest-distance-to-a-character/

var shortestToChar = function(s, c) {
    //   set the array to push into 
    const output = [];
    
    //  loop s and if s[i] is c push into outputs 0, if not run2 nested loops
    //  forward and back to see the closest c and push the closet distance into arr
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            output.push(0);
        } else {
            let closest = Infinity;
            let count = 0;
            for (let j = i - 1; j >= 0; j--) {
                count += 1;
                if (s[j] === c) {
                closest = count;
                count = 0;
                break;
                }
            }
            count = 0;
            for (let j = i + 1; j < s.length; j++) {
                count += 1;
                if (s[j] === c) {
                if (count < closest) {
                closest = count;
                break;
                } else {
                break;
                }
            }
        }
            
            output.push(closest);
    }
    }
    return output;
};

//edge cases: s.length === 1

//PSEUDO:
//const output = [];
//loop s
//if (s[i] === c){
//output.push(0)
//}
//else:
//let closest = Infinity;
//let count = 0;
//then double loop (once backwards)
//count += 1;
//if (s[j] === c){
//closest = count
//count = 0;
//break
//}
//another double loop (forwards)
//if (s[j] === c){
//if (count < closest):
//closest = count
//count = 0;
//break
//} else:
//break

//outside of nested loops but in loop
//output.push(closest)