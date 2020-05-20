//findWithinArray from codewars 6 kyu https://www.codewars.com/kata/51f082ba7297b8f07f000001/train/javascript

var findInArray = function(array, iterator) {
    for (let i = 0; i< array.length; i++) {
      if (iterator(array[i], i) === true) {
      return i
      }
    } 
    return -1
    
  };

  //refactor

  var findInArray = function(array, iterator) {
    return array.map(iterator).indexOf(true);
  };