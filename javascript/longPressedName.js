//  from leetcode easy: https://leetcode.com/problems/long-pressed-name/

var isLongPressedName = function(name, typed) {
    const nCounts = [];
    const tCounts = [];
    let index = 0;
    for (let i = 0; i < name.length; i++) {
    if (name[i] === name[i-1]) {
    let temp = nCounts[index - 1][1]
    nCounts.splice(index - 1, 1, [name[i], temp + 1])
    } else {
    nCounts.push([name[i], 1]);
    index += 1;
    }
    }
    
    index = 0;
    for (let i = 0; i < typed.length; i++) {
    if (typed[i] === typed[i-1]) {
    let temp = tCounts[index - 1][1]
    tCounts.splice(index - 1, 1, [typed[i], temp + 1])
    } else {
    tCounts.push([typed[i], 1])
    index += 1;
    }
    }
    
    if (nCounts.length !== tCounts.length) {
    return false
    }

    for (let i = 0; i < tCounts.length; i++) {
    if (tCounts[i][0] !== nCounts[i][0]) {
    return false;
    } else if (tCounts[i][1] < nCounts[i][1]) {
    return false
    }
    }

    return true
};

//logistics:
//if there are missing a car in typed that is in name => false Done
//if there are letters in typed that arent in named => false  DONE
//typed letters have to be in the same order as name Done
//if there are less of any char in typed => false 
//excesses in typed need to be able to be trimmed down to a point where they have the same amt as name 