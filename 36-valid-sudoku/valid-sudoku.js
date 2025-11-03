/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowsVal = true;
    let colsVal = true;
    let boxesVal = true;

    //rows
    for (let row of board){
        let rowSet = new Set();
        let nums = [];
        for (let cell of row){
            if (cell !== '.'){
                //if (cell > 9 || cell < 1) rowsVal = false;
                if (rowSet.has(cell)) rowsVal = false;
                rowSet.add(cell);
                nums.push(cell);
            }
        }
        if (rowSet.size > 9) rowsVal = false;
        //console.log('rowSet is: ', rowSet);
    }

    //cols
    for (let i = 0; i < board[0].length; i++){
        let colSet = new Set();
        let nums = [];
        for (let j = 0; j < board.length; j++){
            let cell = board[j][i];
            if (cell !== '.'){
                //if (cell > 9 || cell < 1) colsVal = false;
                if (colSet.has(cell)) colsVal = false;
                colSet.add(cell);
                nums.push(cell);
            }
        }
        if (colSet.size > 9) colsVal = false;
    }

    //boxes
    //0-2, 3-5, 6-8
    function boxMaker(arr) {
    let boxSet = []
    let index = 0
    let size = arr.length
    while (index < size) {
      let threeRowSet = arr.slice(index, index + 3)
      let box1 = []
      let box2 = []
      let box3 = []
      for (let i = 0; i < 3; i++) {
        let row = threeRowSet[i]
        for (let n = 0; n < size; n++) {
          if (n < 3) {
            box1.push(row[n])
          } else if (n < 6) {
            box2.push(row[n])
          } else if (n < 9) {
            box3.push(row[n])
          }
        }
      }
      boxSet.push(box1)
      boxSet.push(box2)
      boxSet.push(box3)
      index = index + 3
      }
    return boxSet
  }
  let boxes = boxMaker(board);
  for (let box of boxes){
    let boxSet = new Set();
    for (let cell of box){
        if (cell !== '.'){
        //if (cell > 9 || cell < 1) boxesVal = false;
        if (boxSet.has(cell)) boxesVal = false;
        boxSet.add(cell);
        }
    }
    if (boxSet.size > 9) boxesVal = false;
  }
    // console.log('rows valid: ', rowsVal);
    // console.log('cols valid: ', colsVal);
    // console.log('boxes valid: ', boxesVal);

    return (rowsVal && colsVal && boxesVal);
    
};