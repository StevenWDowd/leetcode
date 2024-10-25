/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
    //let satsfies = true;
    for (let i = 0; i < grid.length; i++){
        let row = grid[i];
        for (let j = 0; j < row.length; j++){
            let cell = row[j];
            //let below = grid[i+1][j];
            //let right = grid[i][j+1];
            if (i < grid.length - 1){
                let below = grid[i+1][j];
                if (cell !== below) return false;
            }

            if (j < row.length - 1){
                let right = grid[i][j+1];
                if (cell === right) return false;
            }
            
        }
    }
    return true;
};