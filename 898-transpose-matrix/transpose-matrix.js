/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const transposed = [];
    // for (let row of matrix){
    //     let newRow = new Array(row.length);
    //     transposed.push(newRow);
    // }
    for (let i = 0; i < matrix[0].length; i++){
        let newRow = new Array(matrix.length);
        transposed.push(newRow);
    }
    //console.log('tranposed is: ', transposed);
    for (let i = 0; i < matrix.length; i++){
        let oldRow = matrix[i];
        for (let j = 0; j < oldRow.length; j++){
            transposed[j][i] = oldRow[j];
        }
    }
    return transposed;
};