https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integerhttps://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integerhttps://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer// from leetcode easy

var subtractProductAndSum = function(n) {
    //set the variables to increment and then return the differences on 
    let sums = 0;
    let products = 1;
    
    //stringfy n, and then split into an array, and then map that array turning strings into     //ints
    let nStr = n.toString();
    let arr = nStr.split('');
    let nArr = arr.map(s => parseInt(s, 10));
    console.log(nArr)
    
    //loop nArr twice, once setting sums to the sum of sums plus each value of nArr, and         //once setting products to the product of product and each value of nArr
    for (let i = 0; i < nArr.length; i++) {
        sums += nArr[i];
    }
    console.log(sums)
    for (let i = 0; i < nArr.length; i++) {
        products *= nArr[i];
    }
    console.log(products)
    return products - sums
    
    
};

//?'s: limits on time/space complexity?  
//edge cases: 1, 

//Pseudo:

//set sums = 0;
//set products = 0;
//stringify n
//split stringified n into array and map array parseInting every value

//loop nArr and set sums += nArr[i]

//loop nArr and set products *= nArr[i]

//return products - sums