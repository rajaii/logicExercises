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

//Sln 3 after using hints o(n) time and space but no division:
function arrayOfProducts(array) {
  //set the array to return and the products from right and left
  const products = [];
  const productRight = [];
  productRight[array.length - 1] = 0;
  productRight[array.length - 2] = array[array.length - 1];
  const productLeft = [];
  productLeft[0] = 0;
  productLeft[1] = array[0];

  //loop backwards setting productRight
  for(let i = array.length - 3; i >= 0; i--) {
    productRight[i] = array[i + 1] * productRight[i + 1];
  }

  //loop forwards setting productLeft
  for (let i = 2; i < array.length; i++) {
    productLeft[i] = array[i - 1] * productLeft[i - 1];
  }

  products[0] = productRight[0];
  products[array.length - 1] = productLeft[array.length - 1];
  
  //loop pushing into products productRight[i] * productLeft[i]
  for (let i = 1; i < array.length - 1; i++) {
    products[i] = (productLeft[i] * productRight[i]);
  }
 
  return products;
}

// Do not edit the line below.
exports.arrayOfProducts = arrayOfProducts;
//set products = []
//set productleft;
//productLeft[array.length - 1] = 0;
//set productRight;
//productRight[0] = 0;

//loop backwards for(let i = array.length - 2; i >= 0; i--)
//if (i === array.length - 2) {
//productLeft[i] = array[i + 1]
//} else {
//productLeft[i] = array[i + 1] * productLeft[i+1];
//}

//loop forwards for (let i = 1; i < array.length; i++) {
//if (i === 1) {
//productRight[i] = array[i - 1]
//} else {
//productRight[i] = array[i - 1] * productRight[i - 1];
//}
//}

//loop array pushing into products productLeft[i] * productRight[i];

//return products