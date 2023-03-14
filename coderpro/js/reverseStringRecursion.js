class Solution {
  constructor (string) {
    this.string = string;
  }

  helperReverse (str, toAppendStr) {
    const a = str.split("");

    if (!a.length) {
      return toAppendStr;
    }

    toAppendStr += a[a.length - 1];

    a.pop();
    const toPass = a.join("");
    return this.helperReverse(toPass, toAppendStr);
    
  }  

  reverse () {
    return this.helperReverse(this.string, "");
  }
}

const s = new Solution("aaakkkddd");

console.log(s.reverse());




