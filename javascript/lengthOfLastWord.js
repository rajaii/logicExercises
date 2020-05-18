//from leetcode
//first pass runs can optimize on runtime and space
var lengthOfLastWord = function(s) {
    let z = s.trim()
    console.log(`z: ${z}|`)
    let stringArr = z.split(' ')

    return stringArr[stringArr.length - 1].length
    
    return 0
};