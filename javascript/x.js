//choose an easy monday, then:

//==> refactor/study on these and pick new one from the next list of them:
//https://leetcode.com/problems/find-all-k-distant-indices-in-an-array
//https://leetcode.com/problems/print-words-vertically/


var reorderSpaces = function(t) {
    //set the memory
    let spaceCounter = 0;
    let wordCounter = 0;
    let newT = "";
    let retStr = "";
    
    //count words and spaces
    for (let i = 0; i < t.length; i++) {
        if (t[i] === " ") {
            spaceCounter += 1;
        }
    }
    
   for (let i = 0; i < t.length; i++) {
        if (t[i] !== " " && t[i + 1] === " ") {
        wordCounter += 1;
        } else if (t[i] !== " " && i === t.length - 1) {
        wordCounter += 1;
        }
    }
    
    console.log("spaceCounter: ", spaceCounter)
    console.log("wordCounter: ", wordCounter)
    //split t (newT) into a string of just words and single spaces
    const tToTransform = t.trim();
    for (let i = 0; i < tToTransform.length; i++) {
        if (tToTransform[i] !== " " && tToTransform[i + 1] === " " && i !== tToTransform.length - 1) {
         newT += `${tToTransform[i]} `;
         } else if (tToTransform[i] !== " " && tToTransform[i + 1] !== " ") {
          newT += tToTransform[i];
        } 
    }
    console.log(newT)
    
    //set spaces and padding
    const extraPadding = spaceCounter % wordCounter; 
    const spaces = Math.floor(spaceCounter / wordCounter);
    
    //HERE loop down continue
    const spacesBetween = wordCounter - 1;
    
    
    //loop newT and concatenate with retStr until the length === t
    let i = 0;
    while (retStr.length <  t.length) {
        let counter = spaces;
        if (newT[i] !== " ") {
            retStr += t[i];
            i += 1;
        } else if (i === newT.length) {
            for (let j = 0; j < extraPadding; j++) {
                retStr += " ";
            }
        } else {
        for (let j = 0; j < counter; j++) {
            retStr += " ";
        }
        i += 1;
        }
    }
    
    return retStr;
};

//PSEUDO:
//let spaceCounter = 0;
//let wordCounter = 0;
//loop text and count spaces

//loop string and count words

//loop string and split into string with just words and 1 space
//split this into an array

//const extraPadding = spaecs % words to get the extra to add on the end
//const spaces = Math.floor(spaces / words) is the amt of spaces 

//const retStr = "";
//let i = 0;
//while (retStr.length <  t.length) {
//let counter = spaces
// if (newT[i] !== " ") {
//retStr += t[i];
//i += 1;
//} else if (condition for last appendage) {
//
//} else {
//for (let j = 0; j < counter; j++) {
//retStr += " ";
//}
//i += counter;
//}
//}