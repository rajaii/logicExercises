var Vector = function (components) {
    this.components = components
    
  };
  
  Vector.prototype.add = function(v) {
    if (v.length != this.components.length) {
    throw "not equivalent"
    }
    let newV = []
  for (let i = 0; i < this.components.length; i++) {
    newV.push(v[i] + this.components[i])
  } console.log(newV) 
  return newV
  }
  
  Vector.prototype.subtract = function(v) {
    
  }
  
  Vector.prototype.dot = function(v) {
    
  }
  
  Vector.prototype.norm = function(v) {
    
  }
  
  //learn vectors add, subtract, dot product, norm 
  //set prototype functions