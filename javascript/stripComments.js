//from codeWars 4kyu https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

function solution(input, markers) {
  //make an obj so have o(1) lookup and not use o(n) .includes()
  const markerObj = {};
  for (let i = 0; i < markers.length; i++) {
    markerObj[markers[i]] = markers[i];
  }
  let retStr = '';
  let isStripping = false;
  let start = 0;
  //loop through input and append to retStr all that is not to be stripped
 for (let i = 0; i < input.length; i++) {
    
     if (isStripping === true && input[i-1] === '\n') {
         start = i-1
         isStripping = false;
         } 

     else if (markerObj[input[i]] != undefined && markerObj[input[i]] === input[i]) {
      if (input[i-1] === ' ') {
          let whiteSpaceCounter = 0;
          let j = i-1;
          while (input[j] === ' ') {
            whiteSpaceCounter += 1;
            j -= 1;
          }
        retStr += input.slice(start, i-whiteSpaceCounter);
        isStripping = true;
        continue
    } else {
      retStr += input.slice(start, i)
      isStripping = true;
      continue;
    }
       
  } else if (isStripping === true && i === input.length - 1) {
    break
  }  else if (isStripping === false && i ===input.length - 1) {
    retStr += input.slice(start)
  }
   
}
 return retStr
}

 
  
  
  //"apples, plums % and bananas\npears\noranges%"  ["%", "!"]



//Pseudo:

//edge cases:empty string, whitespace at beginning, 
//?'s:limits on time/space;  limits on inputs?  what if there are 2 comment markers?
//how handle those

//make markerObj = {}
//loop through markers and markerObj[markers[i]] = markers[i]

//let retStr = ''
//let isStripping = false;
//let start = 0

//loop through input if markers[i] != undefined && input[i] === markers[i]:

//if(input[i-1] === ' '):
//let whiteSpaceCounter = 0
//logic to strip whitespace (for loop going back until != ' ' also
//iterating whitespace counter)
//retStr += input.slice(start, i - whiteSpaceCounter)
//isStripping = true

//else retStr += input.slice(start, i)
//isStripping = true

//continue if (isStripping === true && input[i] === 'n' && input[i-1] === '\')
//isStripping = false
//continue