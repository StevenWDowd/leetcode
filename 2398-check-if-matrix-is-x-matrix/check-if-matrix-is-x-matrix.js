/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    let dim = grid.length;
    for (let i = 0; i<grid.length; i++){
        let row = grid[i];
        for (let j = 0; j < row.length; j++){
            let cell = row[j];
            if (i === j || i === (dim - 1 - j)){
                //on diag
                if (cell === 0) return false;
            } else {
                if (cell !== 0) return false;
            }
        }
    }
    return true;
};