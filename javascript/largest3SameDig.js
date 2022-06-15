//  from leetcode easy: https://leetcode.com/problems/largest-3-same-digit-number-in-string 

var largestGoodInteger = function(n) {
  if (n.length === 3 && n[0] === n[1] && n[0] === n[2]) {
      return n;
  }
  //set the array for the goods
  const goods = [];
  
  for (let i = 0; i < n.length - 2; i++) {
      if (n[i] === n[i+1] && n[i] === n[i+2]) {
          goods.push(n.slice(i, i+3));
      }
  }
  
  if (goods.length === 0) return "";
  let max = Math.max(...goods).toString();
  if (parseInt(max) === 0) return "000";
  if (max.length < 3) {
      return max.padStart(3 - max.length, "0");
  } else {
      return max;
  }
};

//PSEUDO:
//const goods = [];
//loop n to n.length - 3
//if (n[i] === n[i+1] && n[i] === n[i+2]) {
//goods.push(parseInt(n.slice(i, 1+3)))
//}

//return Math.max(...goods)