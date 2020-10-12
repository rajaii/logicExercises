//from leetcode easy: https://leetcode.com/problems/sum-of-even-numbers-after-queries

var sumEvenAfterQueries = function(a, queries) {
    //loop through queries, adding the value at value to a[index]
    //set evens and push into as we go and set a[i] to sum of evens
    let evens = []
    let sumOfEvens = [];

    
    for (let i = 0; i < queries.length; i++) {
        a[queries[i][1]] += queries[i][0];
        
        for (let j = 0; j < a.length; j++) {
            if (a[j] % 2 === 0) {
                evens.push(a[j]);
            }
        }
          
        if (evens.length > 0) {
        sumOfEvens[i] = evens.reduce((a, c) => a + c);
        } else {
            sumOfEvens[i] = 0;
        }
        evens.length = 0;
        
        
    }
    
    return sumOfEvens
};

//edge cases: queries or A.length === 1,  more queries than A or vice versa
//?'s: limits on time/space? 
//PSEUDO:
//loop queries
//a[queries[i][1]] += queries[i][0]
//loop a
//if a[i] % 2 === 0
//evens.push a[i]

//return a

//A = [1,2,3,4], 
//queries = [[1,0],[-3,1],[-4,0],[2,3]]

//logic was flawed.  Completely misunderstood the problem, and retured to code in place without psuedo after that, bad practice, try to go back to psuedo if this happens again


