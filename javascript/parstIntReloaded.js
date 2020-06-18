//from codewars 4kyu: https://www.codewars.com/kata/525c7c5ab6aecef16e0001a5/train/javascript

function parseInt(string) {

    let numObj = {
    'one': 1,'two': 2,'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8,
    'nine': 9, 'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13, 'fourteen': 14,
    'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 
    'twenty': 20, 'thirty': 30,'forty': 40,'fifty': 50,'sixty': 60,'seventy': 70,
    'eighty': 80,'ninety': 90};
    
    if (string === 'one million') {
    
    return 1000000
    
    } else if (string === 'zero') {
    
    return 0
    
    } else {
    
      let retNum = 0;
      let sArr = string.split(' ');
     
      for (let i = 0; i < sArr.length; i++) {
      
       if (sArr[i] === 'and') {
       
        continue;
        
       } else if (sArr[i].includes('-')) {
       
       let splitNum = sArr[i].split('-');
       retNum += numObj[splitNum[0]];
       retNum += numObj[splitNum[1]];
       
       } else if (sArr[i] === 'hundred') {
       
        retNum -= numObj[sArr[i-1]]
        retNum += (100 * numObj[sArr[i-1]])
        
       } else if (sArr[i] === 'thousand') {
       
         retNum *= 1000
         
       } else {
       
       retNum += numObj[sArr[i]]
       
       }
      } return retNum
    } 
  }
  // if hundred => subtract i-1 from it and mult i-1 times it, if thousand multiply 
  //whole number before to it
  // if - do above logic
  
  //order them
  
  //map out:
  //five hunderd thousand twenty-two
  //five hundred forty-three thousand two hundred fifty-six
  
  //add 5, sub 5 mult 100 * i-1 and add to retNum, split logic => add 40 then 3,
  //times 1000, add 2, sub 2 mult 100 * i-1 and add to retNum, split logic, add 50 then add
  //66
  
  //5
  //0 => 500
  //543
  //543000
  //543002
  //543200
  //543256
  
  // if hundred => subtract i-1 from it and mult i-1 times it, if thousand multiply 
  //whole number before to it
  // if - do above logic
  
  //order them
  
  //?'s ret what for empty string?dashes always present on ifties? capitals vs lower???  are inputs valid? space/mem constraints?
  //edge cases: empty string =>0 