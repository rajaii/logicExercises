//make a double loop passing and swapping on the inner if j > j+1
//use a  boolean to flip if swapped
//when full pass w/o swap return array or break

//o(n^2)

var sortArray = function(n) {
  //bubble sort:
  for (let i = 0; i < n.length; i++) {
      let swapped = false;
      for (let j = 0; j < n.length; j++) {
          if (n[j] > n[j + 1]) {
              swapped = true;
              let temp = n[j];
              n[j] = n[j+1];
              n[j+1] = temp;
          }
          if (j === n.length - 1 && !swapped) {
              return n;
          }
      }
  }
};

