//  from leetcode easy: https://leetcode.com/problems/complement-of-base-10-integer

var bitwiseComplement = function(n) {
  //turn in to bin array to loop
  const bin = n.toString(2).split("");
  
  //loop and swap
  for (let i = 0; i < bin.length; i++) {
      if (bin[i] === "1") {
          bin[i] = "0";
      } else {
          bin[i] = "1";
      }
  }
  
  
  return parseInt(bin.join(""), 2);
};

//PSEUDO:
//const bin = n.toString(2).split("");
//loop bin and flip

//return parseInt(bin.join(""), 2);