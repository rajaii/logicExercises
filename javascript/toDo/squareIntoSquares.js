//from codewars 4kyu https://www.codewars.com/kata/54eb33e5bc1a25440d000891/train/javascript

function decompose(n) {
    let comp = n ** 2;
    let iSqObj = {};
    for (let i = 1; i < n; i++) {
      iSqObj[i] = i ** 2;
    }
  
  console.log(Object.values(iSqObj))
    
    function getCombinations(nums) {
      var result = [];
      var f = function(prenum, nums) {
        for (var i = 0; i < nums.length; i++) {
          result.push(prenum + nums[i]);
          f(prenum + nums[i], nums.slice(i + 1));
        }
      }
      f(0, nums);
      return result;
}
   let combos = getCombinations(Object.values(iSqObj));
   
    
    
}

//?'s imits on input? time? space? 
//edge cases: really large nums js limits, no array return null

//make nSqObj
//loop n and push i: i**2 into nSqObj
//loop through nsq obj and get combos that add up to n**2
//push all combos into a combos array



//have combos but following 2 won't work, have to somehow keep track of nums added to get the combos to figure out the return value/
//ALSO study again the combinations recursion function and how it works intensely, this has tripped me out so many times before LEARN IT

