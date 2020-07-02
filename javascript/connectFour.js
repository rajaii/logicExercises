//from codewars 4kyu https://www.codewars.com/kata/529962509ce9545c76000afa/train/javascript

function connectFour(board) {
  //count horizontals and also see if board is full
    let fullBoard = true;
    
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') {
      fullBoard = false
      } else if (board[i][j] === 'Y' && board[i][j+1] === 'Y' && board[i][j+2] === 'Y' && board[i][j+3] === 'Y') {
      return 'Y'
      } else if (board[i][j] === 'R' && board[i][j+1] === 'R' && board[i][j+2] === 'R' && board[i][j+3] === 'R') {
      return 'R'
      }
      }
    }
    //count diagonals
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'R' && board[i+1][j-1] === 'R' && board[i+2][j-2] === 'R' && board[i+3][j-3] === 'R') {
      return 'R'
      } else if (board[i][j] === 'Y' && board[i+1][j-1] === 'Y' && board[i+2][j-2] === 'Y' && board[i+3][j-3] === 'Y') {
      return 'Y'
      } else if (board[i][j] === 'R' &&  board[i+1][j+1] === 'R' && board[i+2][j+2] === 'R' && board[i+3][j+3] === 'R') {
      return 'R'
      } else if (board[i][j] === 'Y' && board[i+1][j+1] === 'Y' && board[i+2][j+2] === 'Y' && board[i+3][j+3] === 'Y') {
      return 'Y'
      } 
      else if (board[i][j] === 'Y' && board[i+1][j] === 'Y' && board[i+2][j] === 'Y' && board[i+3][j] === 'Y') {
      return 'Y'
      } else if (board[i][j] === 'R' && board[i+1][j] === 'R' && board[i+2][j] === 'R' && board[i+3][j] === 'R') {
      return 'R'
      } 
      }
    }
    
    if (fullBoard) {
    return 'draw'
    } else {
    return 'in progress'
    }
    
    
    
  }
  
  //edge cases: 
  //?'s limitations on time/space?do caps vs lower matter? 
  
  //set a horizontalCounter for r and y, set 8 diagonalCounters for r and y (in loops)
  //set a counter boolean for board to true, if ecnounter a '-' set to false
  
  //count horizontals: for loop checking if i-1+4 are the val and ret if so
  
  //count diagonals nested loop checking ones below and right/left, but i<3
  
  //if board is full and counters != 4 return 'draw'
  //else if board is is not full and no winner return 'in progress'
  
  // [['-','-','-','-','-','-','-'],
  //  ['-','-','-','-','-','-','-'],
  //  ['-','-','-','R','R','R','R'],
  //  ['-','-','-','Y','Y','R','Y'],
  //  ['-','-','-','Y','R','Y','Y'],
  //  ['-','-','Y','Y','R','R','R']]
  