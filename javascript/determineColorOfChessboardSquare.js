//  from leetcode easy: https://leetcode.com/problems/determine-color-of-a-chessboard-square

var squareIsWhite = function(coordinates) {
    //  split coordinates so can run the math and logic
    const c = coordinates.split('');
    
    //  set conditional to return
        if ((c[0] === 'a' || c[0] === 'c' || c[0] === 'e' || c[0] === 'g') &&  parseInt(c[1], 10) % 2 === 1) {
    return false;
    } else if ((c[0] === 'b' || c[0] === 'd' || c[0] === 'f' || c[0] === 'h') &&  parseInt(c[1], 10) % 2 === 0) {
               return false
               }
    
    else {
        return true;
    }
    
};

//true === white

//bdfh and %2 === 1 are white
//bdfh and % 2 === 0 are black

//aceg and % 2 === 1 are black
//

//PSEUDO:
//const c = coordinates.split('')
//if ((c[0] === 'a' || c[0] === 'c' || c[0] === 'e' || c[0] === 'g' &&  parseInt(c[1], 10) % 2 === 1) || (c[0] === 'b' || c[0] === 'd' || c[0] === 'f' || c[0] === 'h' &&  parseInt(c[1], 10) % 2 === 0)) {
// return false
// } else {
//     return true;
// }