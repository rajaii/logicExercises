function getGeneration(cells, generations){
    while (generations > 0) {
      for (let i = 0; i < cells.length; i++) {
        for (let j = o; j < cells[i].length; j++) {
          if (cells[i][j] === 1 && (cells[i][j-4] + cells[i][j-3] + cells[i][j-2] + cells[i][j-1] + cells[i][j + 1] + cells[i][j+2] + cells[i][j+3] + cells[i][j+4]) < 2) {
          cells[i][j] = 0
          }
          else if (cells[i][j] === 1 && (cells[i][j-4] + cells[i][j-3] + cells[i][j-2] + cells[i][j-1] + cells[i][j + 1] + cells[i][j+2] + cells[i][j+3] + cells[i][j+4]) > 3) {
          cells[i][j] = 0
          }
          else if (cells[i][j] === 1 && (cells[i][j-4] + cells[i][j-3] + cells[i][j-2] + cells[i][j-1] + cells[i][j + 1] + cells[i][j+2] + cells[i][j+3] + cells[i][j+4]) === 2 || (cells[i][j] === 1 && (cells[i][j-4] + cells[i][j-3] + cells[i][j-2] + cells[i][j-1] + cells[i][j + 1] + cells[i][j+2] + cells[i][j+3] + cells[i][j+4]) === 3)) {
          continue
          }
          else if (cells[i][j] === 0 && (cells[i][j-4] + cells[i][j-3] + cells[i][j-2] + cells[i][j-1] + cells[i][j + 1] + cells[i][j+2] + cells[i][j+3] + cells[i][j+4]) === 3 ) {
          cells[i][j] = 1
          }
        }
      }
      generations--
    }
  }

//nested while loop on cells and make sure the following use base case of g > 0
//decrement g after every run of loop
//ifs to handle the rules from inst
//use counter to count the amt of dead or live neighbors
////////may need conditional for cells on the side or corner of array to not throw error
//if cells[j] === 1 && cells[j-4] + cells[j-3] ... + cells[j +1] + cells[j+2] ... < 2 then cell[j] = 0
//if cells[j] === 1 && cells[j-4]... + cells[j+4] > 3 then cell[j] = 0
//if cells[j] === 1 && cells[j-4] ...+ cells[j+4] ==2 || ===3 then continue
//if cells[j] === 0 && sum of neighbors === 3 then cells[j] = 1

//push into above arr 

//if no living cells, return [[]]
//return 2d array cropped around living cells