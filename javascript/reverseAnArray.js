//from codewars 3kyu https://www.codewars.com/kata/59b81886460387d8fc000043/train/javascript

const reverse = a => {
    let counter = 1;
    let temp1;
    for (let i = 0; i < a.length; i++) {
      if (i === a.length / 2 || a.length % 2 != 0 && i === Math.floor(a.length/2) ) {
        break
      }
      temp1 = a[i];
      a[i] = a[a.length-counter]
      a[a.length-counter] = temp1
      counter += 1;
     
    } 
    return a
 }
 ;


 
 //first pass ^ all passing but space limitation: refactor also note weird that they are not talking about space as in memory of the computer
 //but more in terms of just lines of code.

 const reverse = a => {
    for (let i = 0; i < a.length / 2 || a.length % 2 != 0 && i === Math.floor(a.length/2); i++) {
      let temp1 = a[i];
      a[i] = a[a.length-(i+1)]
      a[a.length-(i+1)] = temp1    
    }
    return a
 }


 //next result, ^ the console sais code size is 230 which is below the 240 , but still giving me the error too long???  Bug maybe

 const reverse = a => Array.from(a, (c,i) => a[a.length-(i+1)])

 //down to 68 bytes lol

 a.map((c,i)=>a[a.length-(i+1)])

 //down to 59 they working us on this one


 //edge cases: empty arr, array with 2, array all same or mostly same
 //?'s 30bytes 240 bits of space=> limitations on time? limits on the input size?
 //t1 1,t2 5
 //[1,2,3,4,5]
 //[5,2,3,4,1]    [5,2,3,4,1,1]
 //[5,4,3,2,1]stop at mid value
 
 //[3,2,1]
 //loop through, 
 //have counter to count back increment counter
 //cut first put last vice versa, then a[1] to a[a.length-counter, which will be 2]
 
 //... until either at middle value or if no middle value 

 