/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if (deck.length === 1) {
        return false
    } else if (deck.every(c => c === deck[0])) {
        return true
        }
    else {
    let obj = {};
    for (let i = 0; i < deck.length; i++) {
        if (obj[deck[i]] === undefined) {
            obj[deck[i]] = 1
        } else {
            obj[deck[i]] += 1
        }
    }

    let vals = Object.values(obj)
    if (!vals.every(v => v > 1)) {
        return false
    }
    let min = Math.min(...vals)
    if (vals.every(v => v === vals[0])) {
        return true;
    } 
       
    let j = 0
    for (let i = 2; i <= min; i++) {
        if (vals.every(v => v % i === 0)) {
            return true
        }
    }
    
    return false
 
    
    }};

//?'s limits on int number input? limits on time/space?
//edge cases: length of deck < 2 => return false, all same int => return deck
//have to be divisible by something btw 2 and min

//make obj
//loop through deck
//if obj[num] === undefined:
//obj[num] = 1
//else if obj[num] != undefined:
//obj[num] += 1

//loop through values of obj
//if they are all the same, return true
//else if they not all the same but the ones that are not equal are multiples of the other ones in the vals ie all are 2  but one is 4 and one is 6
//loop through vals and check if all are mults of the min in vals
//ret true
//else ret false

//set up loop from 2 though max of vals if there is a numthat they all mod to 0 then true