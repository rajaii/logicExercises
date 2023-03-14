//  Recursive with built in functions

class SolutionRecursiveWBuiltInFns {
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

const s1 = new SolutionRecursiveWBuiltInFns("aaakddd");

console.log(s1.reverse());

//Recursive following the iterative flow
class SolutionRecursive {
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

const s2 = new SolutionRecursive("aaakddd");

console.log(s2.reverse());


//iterative
class SolutionIterative {
  constructor (string) {
    this.string = string;
  }

  reverse () {
    let toAppend = "";
    for (let i = this.string.length - 1; i > -1; i--) {
      toAppend += this.string[i];
    } 
    return toAppend;
  }
}


const s3 = new SolutionIterative("aaakddd");

console.log(s3.reverse());









