//  from leetcode easy: https://leetcode.com/problems/max-consecutive-ones

var findMaxConsecutiveOnes = function(n) {
    //set the mem to count and push counts into
    const counts = [];
    let counter = 0;

    //loop nums and count 1's
    for (let i = 0; i < n.length; i++) {
        if (n[i] === 1 && i !== n.length - 1) {
            counter += 1;
        } else if (i === n.length - 1) {
            if (n[i] === 1) {
                counter += 1;
                counts.push(counter);
            } else {
                counts.push(counter);
            }
         } else {
            counts.push(counter);
            counter = 0;
        }
    }

    return Math.max(...counts);
};