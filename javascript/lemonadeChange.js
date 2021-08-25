//  https://leetcode.com/problems/lemonade-change/

var lemonadeChange = function(b) {
    //. set the object to count bills as we loop
      const bills = {
          "5": 0,
          "10": 0,
          "20": 0,
      }
      
      for (let i = 0 ; i < b.length; i++) {
          bills[b[i]] += 1;
          if (b[i] === 20) {
              if ((bills["10"] === 0 && bills["5"] < 3) || (bills["10"] > 0 && bills["5"] === 0)) {          
                  return false;
              }
              if (bills["10"] > 0 && bills["5"] > 0) {
              bills["10"] -= 1;
              bills["5"] -= 1; 
              }
              else if (bills["5"] > 2 && bills["10"] === 0) {
              bills["5"] -= 3;     
              }
          } else if (b[i] === 10) {
              if (bills["5"] === 0) {          
                  return false;
              }
              bills["5"] -= 1;        
          }
      }
      return true;
  };
  
  //Edge cases: 1 customer or 2
  
  //PSEUDO:
  
  //loop and increment bills[b[i]]
  //then subtract the respective amount (1 5 and 1 10 if it is a 20 and 1 5 if it is a 10)
  //if there is not the right amount at any point return false
  //outside of loop return true
  //