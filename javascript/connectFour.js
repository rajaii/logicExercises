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


  ////refactor
//board only has 6 rows so maybe can unnest the loops
//make 6 objects with obj[i] = board[1,2,3 etc][i] separately in for loops more code and space but less time 6 loops on board[1,2,...]
//can run a loop on each obj and check conditionals against obj2[i+1], obj3[i - whatever etc]
//code will be longer, but runtime down from o n^2 to o n
  
function connectFour(board) {
  let fullBoard = true;
  let obj1 = {};
  let obj2 = {};
  let obj3 = {};
  let obj4 = {};
  let obj5 = {};
  let obj6 = {};
  
    for (let i = 0; i < board[1].length; i++) {
      obj1[i] = board[1][i]
    }
  
    for (let i = 0; i < board[2].length; i++) {
      obj2[i] = board[2][i]
    }
  
  for (let i = 0; i < board[3].length; i++) {
      obj3[i] = board[3][i]
    }
  
  for (let i = 0; i < board[4].length; i++) {
      obj4[i] = board[4][i]
    }
  
  for (let i = 0; i < board[5].length; i++) {
      obj5[i] = board[5][i]
    }
  
  for (let i = 0; i < board[6].length; i++) {
      obj6[i] = board[6][i]
    }
    
   for (let key in obj1) {
     
   } 
    
    
  }