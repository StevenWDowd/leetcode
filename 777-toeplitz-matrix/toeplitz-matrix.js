/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    //check diagonals starting in left col
    for (let i = 0; i < matrix.length; i++){
        let diagSet = new Set();
        let row = i;
        let col = 0;
        let curr = matrix[row]?.[col];
        while(curr !== undefined){
            diagSet.add(curr);
            row++;
            col++;
            curr = matrix[row]?.[col];
        }
        //console.log('diagSet is: ', diagSet);
        if (diagSet.size > 1) return false;
    }

    //check diagonals beginning from top row
    //console.log('entering row check');
    for (let i = 0; i < matrix[0].length; i++){
        let diagSet = new Set();
        let col = i;
        let row = 0;
        let curr = matrix[row]?.[col];
        //console.log(`curr is now: ${curr}`);
        while (curr !== undefined){
            diagSet.add(curr);
            row++;
            col++;
            curr = matrix[row]?.[col];
        }
        //console.log('diagSet is: ', diagSet);
        if (diagSet.size > 1) return false;
    }
    return true;
};