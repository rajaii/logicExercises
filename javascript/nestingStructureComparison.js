//from codewars 4kyu: https://www.codewars.com/kata/520446778469526ec0000001/train/javascript

Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether
    if (!isArray(other)) {
      return false
    } else if (this.length != other.length) {
      return false
      } else {
      //objects to hold array values for comparison
      let thisObj = {};
      let otherObj = {};
      
      //populate objects:
      //may have to refactor a little if they give objects and sets
      
      for (let i = 0; i < this.length; i++) {
        if (this[i].constructor != Array) {
          thisObj[i] = true; 
        } else {
        thisObj[i] = this[i];
        }
      }
      for (let i = 0; i < other.length; i++) {
        if (other[i].constructor != Array) {
          otherObj[i] = true
        } else{
        otherObj[i] = other[i];
          }
      }
      //loop both objects to check equality of values(recurse if values are nested further)
      
      let t = Object.values(thisObj);
      let o = Object.values(otherObj);
      for (let i = 0; i < o.length; i++) {
        if (i === o.length - 1 && o[i] === true && t[i] === true) {
          return true
        } else if (o[i] === true && t[i] != true || t[i] === true && o[i] != true) {
          return false
        }  else if (o[i].constructor === Array && t[i].constructor === Array && o[i].length != t[i].length) {
          return false
        } else if (o[i].constructor === Array && t[i].constructor === Array && o[i].length === t[i].length) {
          if (!t[i].sameStructureAs(o[i])) {
            return false
          } else {
            continue
          }
        } else if (i === o.length && o[i].constructor === Array && t[i].constructor === Array && o[i].length === t[i].length ) {
          if (!t[i].sameStructureAs(o[i])) {
            return false
          } else {
            return true
          }
        }
      }
      return true
    }
};

//?'s: time/space complexity constraints? limits on inputs?  Will objects or sets be nested?
//if so do they have to follow the nesting structurual equalty guidelines?
//are nestings always going to be valid? return false if !isArray
//edge cases: useisArray to check if is anaarray, empty arrays, easy if bot sides empty 
//true
//{1: 1, 2: [1,1], 3: [1,1,[1,1], [1,1,1]]}
//[1, [1,1], [1,1, [1,1], [1,1,1]]]

//loop through other and this separately
//make objects that have {i: true} or {i: [1,1]} as values
//loop both objects and check and see if all positions are true, true or same length arrays,
//if nested in obj recurse the function on that part of the object