//from codewars: 4kyu   https://www.codewars.com/kata/5531abe4855bcc8d1f00004c/train/javascript


function bowlingScore(frames) {
  //set score to be added to and create an array to be iterated and score kept upon
console.log(frames)
  let currentScore = 0;
  let scoreArr = frames.split(' ').map(s => {
    if (s.length > 1) {
      return s.split('')
    } else {
      return s
    }
  })
 
  
  //loop through scoreArr and track score as we go
  for (let i = 0; i < scoreArr.length; i++) {
    if (i === 9) {
      if (scoreArr[i][0] === 'X' && scoreArr[i][1] === 'X' && scoreArr[i][2] === 'X') {
        currentScore += 30;
      } else if (scoreArr[i][1] === '/' && scoreArr[i][2] != 'X') {
          currentScore += 10
          currentScore += parseInt(scoreArr[i][2])
      } else if (scoreArr[i][1] === '/' && scoreArr[i][2] === 'X') {
          currentScore += 20
      } else {
          currentScore += parseInt(scoreArr[i][0])
          currentScore += parseInt(scoreArr[i][1])
      }
    } 
    
    //.includes
    else if (i === 8) {
      if (scoreArr[i+1][0] === 'X' && scoreArr[i+1][1] === 'X' && scoreArr[i+1][2] === 'X') {
        if (scoreArr[i] === 'X') {
          currentScore += 30
        } else if (scoreArr[i][1] === '/') {
          currentScore += 20
        } else {
          currentScore += parseInt(scoreArr[i][0], 10)
          currentScore += parseInt(scoreArr[i][1], 10)
        } 
      } else if (scoreArr[i+1][1] === '/') {
        if (scoreArr[i] === 'X') {
          currentScore += 20
        } else if (scoreArr[i][1] === '/') {
          currentScore += 10
          currentScore += parseInt(scoreArr[i+1][0], 10)
        } else {
            currentScore += parseInt(scoreArr[i][0], 10)
            currentScore += parseInt(scoreArr[i][1], 10)
          }
      } else { 
        if (scoreArr[i] === 'X') {
          currentScore += 10
          currentScore += parseInt(scoreArr[i+1][0], 10)
          currentScore += parseInt(scoreArr[i+1][1], 10)
        } else if (scoreArr[i][1] === '/') {
          currentScore += 10
          currentScore += parseInt(scoreArr[i+1][0], 10)
        } else {
        currentScore += parseInt(scoreArr[i][0], 10)
        currentScore += parseInt(scoreArr[i][1], 10)
        }
      }
    }
   
     
    else if (scoreArr[i] === 'X' && scoreArr[i+1] != 'X' && scoreArr[i+1][1] != '/') {
      currentScore += 10
      currentScore += parseInt(scoreArr[i+1][0], 10)
      currentScore += parseInt(scoreArr[i+1][1], 10)
    } else if (scoreArr[i] === 'X' && scoreArr[i+1] != 'X' && scoreArr[i+1][1] === '/') {
      currentScore += 20
    } else if (scoreArr[i]=== 'X' && scoreArr[i+1] === 'X') {
      currentScore += 30
    }
    
   
    else if (scoreArr[i][1] === '/') {
      if (scoreArr[i+1] != 'X') {
      currentScore += 10
      currentScore += parseInt(scoreArr[i+1][0], 10)
      } else if (scoreArr[i+1] === 'X') {
      currentScore += 20
      } 
    } 
    
    
    else {
      currentScore += parseInt(scoreArr[i][0], 10)
      currentScore += parseInt(scoreArr[i][1], 10)
    }
  
 }   return currentScore 
}
  
  
  




//PSEUDO/prep

//?'s: will spaces occur in front/end? return as int or str? limits on time/space?  will
//all games have all 10 frames?
//edge cases: all strikes , maybe spaces in front/end 

//iterative
//let currentScore = 0;
//split up frames into framesArr
//loop through framesArr createScoreArr:
//split the digs into sub arrays w 2 strings and leave X's alone maybe w .map

//loop through ScoreArr:

//if i === 9 (last frame!!!!!!!!!!!!!): or can run after loop on i===9 keep like this 
//in case incomplete games given
  //if (scoreArr[i] ===  ['X', 'X', 'X'])
  //currentScore += 30

  //else if scoreArr[i][1] === '/'
  //currentScore += 10
  //currentScore += parseInt(scoreArr[i][2])

  //else 
  //currentScore += parseInt(acoreArr[i][0])
  //currentScore += parseInt(acoreArr[i][1])

  //else if scoreArr[i]=== 'X' && scoreArr[i+1] != 'X':  
//currentScore += 10
//currentScore += score from scoreArr[i+1] figure out logistics in there

//else if scoreArr[i]=== 'X' && scoreArr[i+1] === 'X':
//currentScore += 30
//continue

//else if scoreArr[i][2] === '/':
//currentScore += 10
//currentScore += parseInt(scoreArr[i+1][0])
//continue

//else: 
//currentScore += parseInt(scoreArr[i][0])
//currentScore += parseInt(scoreArr[i][1])
//continue

//continues not needed because only if/else if /else logic ran in loop

//========================================================================================================

//recursive solution:

console.log(parseInt('0',10))