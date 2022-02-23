//  from leetcode easy https://leetcode.com/problems/pascals-triangle/

var generate = function(numRows) {
    //make a function generatePascal that generates 2d array up to row
   function generatePascalAndPullRow(numRows) {
       const pascal = [[1]];
       for (let i = 0; i < numRows - 1; i++) {
           const newRow = [];
           for (let j = 0; j < pascal[pascal.length - 1].length + 1; j++) {
               if (j === 0) {
                   newRow.push(1);
                   continue;
               } else if (j === pascal[pascal.length - 1].length) {
                   newRow.push(1);
                   pascal.push(newRow);
                   break;
               } else {
                   const topLeft = pascal[pascal.length - 1][j - 1];
                   const topRight = pascal[pascal.length - 1][j];
                   newRow.push(topLeft + topRight);
               }
               
           }
       }
       
       return pascal;
   }
   
   
   return generatePascalAndPullRow(numRows);
};