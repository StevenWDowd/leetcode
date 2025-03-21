/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    const grid = [];
    if (original.length !== (m*n)) return grid;
    let idx = 0;
    while (grid.length < m){
        let row = [];
        while (row.length < n){
            row.push(original[idx]);
            idx++;
        }
        grid.push(row);
    }
    return grid;
};