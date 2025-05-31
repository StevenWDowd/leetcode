/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    if ((mat[0].length * mat.length) !== (r * c)) return mat;
    const newMat = [];
    // let row = 0;
    // let col = 0;
    // while (row < mat.length){
    //     let block = [];
    //     while (col < mat[0].length){

    //     }
    // }
    const stack = [];
    for (let row of mat){
        for (let item of row) stack.push(item);
    }
    let idx = 0;
    while (idx < stack.length){
        let row = [];
        while (row.length < c){
            row.push(stack[idx]);
            idx++;
        }
        newMat.push(row);
    }
    return newMat;

};