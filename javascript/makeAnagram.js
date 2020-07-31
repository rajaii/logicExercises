//from hackerRank easy: https://www.hackerrank.com/challenges/ctci-making-anagrams

function makeAnagram(a, b) {
    let obj = {};
    let obj2 = {};

    for (let i = 0; i < a.length; i++) {
        if (a[i] in obj) {
            obj[a[i]] += 1;
        } else {
            obj[a[i]] = 1;
        }
    }

    for (let i = 0; i < b.length; i++) {
        if (b[i] in obj2) {
            obj2[b[i]] += 1;
        } else {
            obj2[b[i]] = 1;
        }
    }
    console.log(`obj: ${JSON.stringify(obj)}`)
    console.log(`obj2: ${JSON.stringify(obj2)}`)

    let counter = 0;
    for (let key in obj) {
        if (!(key in obj2)) {
            counter += obj[key]
        } else if (obj[key] > obj2[key]) {
            let inc = obj[key] - obj2[key];
            counter += inc;
        } else if (obj[key] < obj2[key]) {
            let inc = obj2[key] - obj[key];
            counter += inc;
        }
    }

    for (let key in obj2) {
        if (!(key in obj)) {
            counter += obj2[key];
        }
    }

    return counter
 
}
//PSEUDO:
//?'s: if not enagrams return just countof all vals or length of both? Is the case where //you are left with one coinciding ///////letter considered an anagram?
//edge cases:empty string, case where not anagrams ever??? abc and ccc

//make two obj
//loop through both and push each into an object with str[i]: 1  and str[i] //+= 1 on repetitions

// make a counter
//loop through one of the object's and if key not in otherObj: 
//counter += 1
//if obj[key] > otherObj[key]: 
//inc = obj[key] - otherObj[key]
//counter += inc 
//if obj[key] < otherObj[key]:
//inc = otherObj[key]- obj[key]
//counter += inc

//loop otherObj and if key not in obj: counter += 1
//return counter