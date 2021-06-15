//  from leetcode easy: https://leetcode.com/problems/distribute-candies-to-people/

var distributeCandies = function(candies, num_people) {
    //  set the array to return with candy counts per person and start all values       //with 0
    const retArr = [];
    
    for (let i = 0; i < num_people; i++) {
        retArr.push(0);
    }
    
    //  set the count, fin (count at final person), and i for the loop
    let count = 1;
    let fin = 0;
    let i = 0;
    
    //  loop while candies > 0 and run logic to iterate retArr[i] with candy counts
    while (candies > 0) {
        if ((candies - (count + fin)) <= 0) {
            retArr[i] += (candies);
            break;
        }

        if (i === retArr.length - 1) {
            retArr[i] += (count + fin);
            candies -= (count + fin);
            fin = (count + fin);
            count = 1;
            i = 0;
        
        } else {
            retArr[i] += (count + fin);
            candies -= (count + fin);
            count += 1;
            i += 1;
        } 
        }
    
    return retArr;
};

//edge cases: num_people > candies,
//?'s: Will all the remaining candies go to the literal last person or las person in //order?

//PSUEDO:
//const retArr = [];

//loop to num_people and push a 0 into retArr

//let count = 1;
//let fin = 0;(final amount of candy given to person at end)
//let i = 0;
//while (candies > 0) {
//if ((candies - (count + fin)) <= 0) {
//retArr[i] += (candies);
//break;
//}

//if (i === retArr.length - 1) {
//retArr[i] += (count + fin)
//fin = (count + fin)
//count = 1;
//i = 0;
//candies -= (count + fin)
//} else {
//retArr[i] += (count + fin)
//count += 1
//i += 1
//candies -= (count + fin)
//} 
//}

//return retArr;
