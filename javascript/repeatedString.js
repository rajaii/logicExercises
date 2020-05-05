function repeatedString(s, n) {
    if (s === 'a') {
        return n
    }
    let indivChars = s.split('')
    console.log(indivChars)
    let newStr = ''
    let indivCharsIndex = 0
    while (newStr.length < n) {
        if (indivCharsIndex === indivChars.length) {
            indivCharsIndex = 0
        }
        newStr += indivChars[indivCharsIndex]
        indivCharsIndex += 1
    }
    
    let counter = 0
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === 'a') {
            counter += 1
        } 
    }
    return counter
}

//break s into arr of individual chars
//set a new str that is n charachters of the s arr (by looping)
//count the number of a's in the the new str
