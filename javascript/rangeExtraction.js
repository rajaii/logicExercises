//from codewars 4kyu https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list){
  let retStr = '';
  let counter = 0;
  console.log(list)
  for (let i = 0; i < list.length; i++) {
  
    if (counter > 0) {
      counter -= 1
      continue
    } else if (i === list.length - 3 && list[i] != list[i+1] -1 && list[i] != list[i+2] -2) {
      retStr += `${list[i]},`;
      retStr += `${list[i+1]},`;
      retStr += `${list[i+2]}`;
      break;
    } else if (i === list.length - 3 && list[i] === list[i+1] -1 && list[i] === list[i+2] -2) {
      retStr += `${list[i]}-${list[i+2]}`;
      break;
    } else if (list[i] != list[i+2] -2) {
      if (i === list.length - 1) {
        retStr += `${list[i]}`;
      } else {
    retStr += `${list[i]},`;
        }
    }
    
    
    else if (list[i] === list[i+1] - 1 && list[i] === list[i+2] - 2) {
      let rangeStr = `${list[i]}-` 
      let temp = i
      while (list[temp] === list[temp + 1] - 1) {
        temp += 1
        counter += 1
        
      }//[14, 15, 17, 18, 19, 20 ]
      if (temp === list.length -1) {
        rangeStr += `${list[temp]}`
      } else {
      rangeStr += `${list[temp]},` 
      }
      retStr += rangeStr
    }
  }
  return retStr
  
}

//?'s: limits on space/time? limits on imputs? if list empty return what? 
//Is list always sorted? will every int be unique?
//edge case:empty list, repeating charachters within a range
//PSEUDO:
//sortedList = list.sort()
//set retStr = ''
//set counter
//loop through list

//if counter > 0:
//counter -= 1
//continue

//else if i === list.length - 3 && list[i] != list[i+1] -1 && list[i] != list[i+2] -2:
//retStr += `${list[i]}`
//retStr += `${list[i+1]}`
//retStr += `${list[i+2]}`
//break

//else if i === list.length - 3 && list[i] === list[i+1] -1 && list[i] === list[i+2] -2:
//retStr += `${list[i]}-${list[1+2]}`
//break

//else if list[i] != list[i+1] -1 && list[i] != list[i+2] -2:
//retStr += list[i]

//else if list[i] === list[i-1] + 1 &&& list[i] === list[i-2] + 2:
//delete last 2 of string out
//define rangeStr to concat with retStr: //rangeStr = `${list[i-2]}-`  MAYBE TOSTRING
//loop through 
//temp = list[i]
//while (temp === list[i + 1] -1):
//temp = list[i+1]
//counter += 1
//rangeStr += `${temp}`
//retStr += rangeStr
//