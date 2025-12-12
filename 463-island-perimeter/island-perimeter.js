/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perim = 0;
    const rowLen = grid[0].length;
    //Go by row. four each 1, add 4 to perim. Then sub 1 for each adjacent 1
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < rowLen; j++){
            let curr = grid[i][j];
            if (curr === 1){
                perim+=4;
                if (grid[i-1]?.[j]){
                    if (grid[i-1][j] === 1) perim-=2;
                }
                if (grid[i]?.[j-1]){
                    if (grid[i][j-1] === 1) perim-=2;
                }
            }
        }
    }
    return perim;
};