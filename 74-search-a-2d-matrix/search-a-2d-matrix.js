/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //start top right
    let currRow = 0;
    let currCol = matrix[0].length - 1;
    while (currRow < matrix.length && currCol > -1){
        let current = matrix[currRow][currCol];
        console.log('current is ', current);
        if (current === target) return true;
        if (current > target) currCol--;
        if (current < target) currRow++;
    }
    return false;
};