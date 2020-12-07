//from leetcode easy: https://leetcode.com/problems/n-repeated-element-in-size-2n-array/submissions/

var repeatedNTimes = function(a) {
    //make the object to store a[i] and counts, in making the object if you have the key return that value
     let store = {};
     for (let i = 0; i < a.length; i++) {
         if (store[a[i]] != undefined) {
             return a[i]
         } else {
             store[a[i]] = 1;
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