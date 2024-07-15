/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rowsTo0 = new Set();
    const colsTo0 = new Set();
    for (let i = 0; i < matrix.length; i++){
        let row = matrix[i];
        for (let j = 0; j < row.length; j++){
            let current = row[j];
            if (current === 0) {
                rowsTo0.add(i);
                colsTo0.add(j);
            }
        }
    }
    console.log('rows: ', rowsTo0);
    console.log('cols: ', colsTo0);

    //zero out rows
    for (let idx of rowsTo0){
        let row = matrix[idx];
        for (let i = 0; i < row.length; i++){
            row[i] = 0;
        }
        // let row = matrix[idx];
        // for (let element of row){
        //     element = 0;
        // }
    }

    //zero out columns
    for (let idx of colsTo0){
        for (let i = 0; i < matrix.length; i++){
            matrix[i][idx] = 0;
        }
        // for (let row of matrix){
        //     row[idx] = 0;
        // }
    }

    
};