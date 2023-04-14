//MEDIUM:

//solution 1 brute force o(n^ 2) time and o(n) space
function arrayOfProducts(array) {
  const products = [];
  
  for (let i = 0; i < array.length; i++) {
    products.push(array.slice(0,i).concat(array.slice(i+1)).reduce((a,c) => a * c, 1));
  }

  return products;
}

//solution 2 o(n) time o(n) space
function arrayOfProducts(array) {
  //find product in aggregate
  let hasZeros = false;
  let hasMultipleZeros = false;
  const product = array.reduce((a,c) => {
    if (c === 0) {
      if (hasZeros) {
        hasMultipleZeros = true;
      }
      hasZeros = true;     
      return a;
    } else {
      return a * c;
    }
    
  }, 1);
  const products = [];

  //  loop array and push into arrays product / array[i]
  for (let i = 0; i < array.length; i++) {
    if (hasZeros && array[i] !== 0) {
      products.push(0);
    } else if (hasZeros && !hasMultipleZeros && array[i] === 0) {
      products.push(product)
    } else if (hasZeros && hasMultipleZeros && array[i] === 0) {
      products.push(0);
    } else {
      products.push(product / array[i]);
    }
    
  }

  return products;
}