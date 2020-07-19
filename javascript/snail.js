//from codewars 4kyu https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript


//first attempt, code looks good, returning everything properly in python tutor, for some reason 
//not runing in codewars
let retArr = [];

let snail = function(array) {
  //base cases
  if (array.length === 1 && array[0].length === 0) {
    return retArr;
  } else if (array.length === 1) {
    retArr.push(array[0][0]);
    return retArr;
  } else if (array.length <= 0) {
    return retArr;
  }
  //logic to run and get the snail going
  array[0].forEach(n => {
    retArr.push(n);
  });
  array.shift();
  
  array.forEach(n => {
    retArr.push(n[n.length-1]);
    n.pop();
  });
  
  for (let i = array[array.length-1].length -1; i >= 0; i--) {
    retArr.push(array[array.length-1][i]);
  }
  
  array.pop();
  
  for (let i = array.length - 1; i >= 0; i--) {
    retArr.push(array[i][0]);
    array[i].shift();
  } 
  
  return snail(array)
}




//PSEUDO:

//?'s limits on input, time, space? if n is 1 ret what, if n is 0 ret what 
//edge cases emtpy array, array vals all same

//make retArr and push arr1 in there and array.shift()

//nested loop, go through push array[i][array[i].length-1] into retArr and 
//then array[i].pop() (maybe not neste loop somehow test)

//loop array[array.length -1] backwards and push all into retArr
//array.pop

//if (arr has stuff in it)nested loop going backwards (maybe not nested, test out)
//push each array[i][0] into retArr going up(backwards)
//array[i].shift()

//recurse on array

//base case V maybe if array.length === 1  
//(maybeloop and push all???) and retArr.push(array[0][0]) return retArr
//else if array.length <= 0 return retArr

// [1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1]
// [1,1,1,1,1,1,1]


// [1,1,1,1,1]
// [1,1,1,1,1]
// [1,1,1,1,1]
// [1,1,1,1,1]
// [1,1,1,1,1]

// [1,1,1]
// [1,1,1]
// [1,1,1]

// [1,1,1,1,1,1]
// [1,1,1,1,1,1]
// [1,1,1,1,1,1]
// [1,1,1,1,1,1]
// [1,1,1,1,1,1]
// [1,1,1,1,1,1]

// [1,1,1,1,1]
// [1,1,1,1,1]
// [1,1,1,1,1]
// [1,1,1,1,1]
// [1,1,1,1,1]