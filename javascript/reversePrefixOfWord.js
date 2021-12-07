//  from leetcode easy:  https://leetcode.com/problems/reverse-prefix-of-word

var reversePrefix = function(word, ch) {
    const w = word.split("");
    const index = w.indexOf(ch)+1;
    const fst = w.slice(0, index);
    const snd = w.slice(index);
    
    let mid;
    if (index % 2 === 0) {
        mid = index / 2;
    } else  {
        mid = Math.floor(index/2)
    }
    
    for (let i = 0; i < mid; i++) {
        let temp = fst[i];
        fst[i] = fst[fst.length - 1 - i];
        fst[fst.length - 1 - i] = temp;
    }
    
    
    return fst.concat(snd).join("")
};

//const w = word.split('')
//break into 2 arrays up to ch and ch on
//i = w.indexOf(ch)
//loop w up to i/2 swapping
//return w.join("")