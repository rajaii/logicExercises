//from codewars 4kyu https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript


let romans = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  
  class Romans {
    toRoman(i) {
      return 'hi'
    }
    
    fromRoman(r) {
      let counter = 0;
      for (let i = 0; i < r.length; i++) {
        if (i === r.length - 1) {
          if (romans[r[i]] > romans[r[i-1]]) {
            counter += (romans[r[i]] - romans[r[i-1]])
          } else {
            counter += romans[r[i]]
          }
        } else if (romans[r[i]] === romans[r[i+1]]) {
          counter += romans[r[i]]
        }
        else if (romans[r[i]] > romans[r[i+1]] && !(romans[r[i]] > romans[r[i-1]])) {
          counter += romans[r[i]]
        } else if (romans[r[i]] > romans[r[i-1]]) {
          counter += (romans[r[i]] - romans[r[i-1]])
          }
        else {
          continue
        }
      } return counter
    }
  }
  
  const RomanNumerals = new Romans
  
  //?'s limitations on input? limits on space/mem, more on rules on roman numerals and how they work, look up
  //edge cases: seems straigeforward, maybe epmty string or 0 for toRoman and fromRoman,n respectively 
  
  //rules: cant add more than 3 of the same romans; cant subtract more than 1 from a roman
  //fromRoman
  //counter = o
  //loop through romans if larger than the one in front, add left to right, if smaller than
  //next one, subract r[i] from r[i+1] and add that to the counter
  //'MCMXCI'
  //1000 + 900 + 90 +
  //"CM XC   IX"
  //toRoman:
  //turn int into string and loop through it:
  //