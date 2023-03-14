//  Recursive with built in functions

// class Solution {
//   constructor (string) {
//     this.string = string;
//   }

//   helperReverse (str, toAppendStr) {
//     const a = str.split("");

//     if (!a.length) {
//       return toAppendStr;
//     }

//     toAppendStr += a[a.length - 1];

//     a.pop();
//     const toPass = a.join("");
//     return this.helperReverse(toPass, toAppendStr);
    
//   }  

//   reverse () {
//     return this.helperReverse(this.string, "");
//   }
// }

// Iterative
class Solution {
  constructor (string) {
    this.string = string;
  }

  helperReverse (string, toAppend) {
    if (!string.length) {
      return toAppend;
    }

    toAppend += string[string.length - 1];
    const toPass = string.slice(0, string.length - 1);

    return this.helperReverse(toPass, toAppend);
  }

  reverse () {
    return this.helperReverse(this.string, "");
  }
}


//Recursive following the iterative flow

const s = new Solution("aaakkkddd");

console.log(s.reverse());






