//EASY

//sln1 o(n) time o(n) space

function runLengthEncoding(string) {
    //set the 2 pointers and encoded
    let encoded = '';
    let left = 0, right = 1;
  
    //loop string anc cound and append to encoded
    while (left < string.length) {
      let count = 1;
      while (string[left] === string[right]) {
        count += 1;
        right += 1;
      }
  
      if (count >= 10) {
        let tenMult = Math.floor(count / 9);
        if (tenMult > 1) {
          for (let i = 0; i < tenMult - 1; i++) {
            encoded = `${encoded}9${string[left]}`;
            count -= 9;
          }
        }
        let leftover = (count % 9);
        if (leftover) {
          encoded = `${encoded}9${string[left]}${leftover}${string[left]}`;
        }   
      } else {
         encoded = `${encoded}${count}${string[left]}`;
      }  
      left = right;
      right = left + 1;
      if (left === string.length - 1) {
        encoded = `${encoded}1${string[left]}`;
        break;
      }
    }
  
    return encoded;
  }