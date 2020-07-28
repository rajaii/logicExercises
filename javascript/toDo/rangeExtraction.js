//from codewars 4kyu https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list){
    let retStr = '';
    let counter = 0;
    
    for (let i = 0; i < list.length; i++) {
    
      if (counter > 0) {
        counter -= 1
        continue
      } else if (i === list.length - 3 && list[i] != list[i+1] -1 && list[i] != list[i+2] -2) {
        retStr += `${list[i]},`;
        retStr += `${list[i+1]},`;
        retStr += `${list[i+2]},`;
        break;
      } else if (i === list.length - 3 && list[i] === list[i+1] -1 && list[i] === list[i+2] -2) {
        retStr += `${list[i]}-${list[1+2]},`;
        break;
      } else if (list[i] != list[i+1] -1 && list[i] != list[i+2] -2) {
      retStr += `${list[i]},`;
      } else if (list[i] === list[i+1] - 1 && list[i] === list[i+2] - 2) {
        let rangeStr = `${list[i]}-` //maybe toString()???
        let temp = list[i]
        while (temp === list[i+1] - 1) {
          temp = list[i+1]
          counter += 1
        }
        rangeStr += `${temp},` //maybe toString()???
        retStr += rangeStr
      }
    }
    return retStr
  }