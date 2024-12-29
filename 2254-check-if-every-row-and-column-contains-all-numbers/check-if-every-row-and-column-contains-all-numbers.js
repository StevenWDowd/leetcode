/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let n = matrix.length;
    for (let i = 0; i < matrix.length; i++){
        const rowSet = new Set();
        const colSet = new Set();
        let row = matrix[i];
        for (let j = 0; j < row.length; j++){
            let curr = row[j];
            if (curr < 1 || curr > n) return false;
            if (rowSet.has(curr)) return false;
            rowSet.add(curr);
        }
        for (let k = 0; k < matrix.length; k++){
            let curr = matrix[k][i];
            if (curr < 1 || curr > n) return false;
            if (colSet.has(curr)) return false;
            colSet.add(curr);
        }
    }

    return true;
};