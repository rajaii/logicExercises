//from leetcode easy: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/submissions/

var repeatedNTimes = function(a) {
    //set visited
     let visited = [];
     let y = a.length;
     
     //loop a and push into visited, if a[i] is in visited, return a[i]
     for (let i = 0; i < y; i++) {
         if (visited.includes(a[a.length - 1])) {
             return a[a.length - 1];
         } else {
             visited.push(a.pop());
         }
     }
     
 };
 
 
 //Edge Cases: 
 //?'s: are all elements numbers? limits on time/space?
 
 //PSEUDO:
 //n = a.length / 2
 
 //double loop if find one that matches return that
 
 //Refactor to improve runtime at the expense of space:
 //make an object of the form (a[i], count)
 //if obj[ai] exists, return a[i]

 //Refactor
//use visited, 
//loop a and push into visted