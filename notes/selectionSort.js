//double loop creating an sorted portion of the list and unsorted portion
//swap the min from unsorted portion to the cur in the sorted portion

//O(n^2)

var sortArray = function(n) {
  //selection sort
  
  for (let i = 0; i < n.length; i++) {
      let mIndex = i;
      for (let j = i + 1; j < n.length; j++) {
          if (n[j] < n[mIndex]) {
              minChanged = true;
              mIndex = j;
          }

          if (j === n.length - 1) {
              let temp = n[i];
              n[i] = n[mIndex];
              n[mIndex] = temp;
          }  

      }

  }
  return n;
};

