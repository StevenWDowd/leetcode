/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
    let ops = 0;
    const cols = [];
    for (let i = 0; i < grid[0].length; i++){
        let col = [];
        for (let j = 0; j < grid.length; j++){
            col.push(grid[j][i]);
        }
        cols.push(col);
    }
    //console.log('cols is: ', cols);
    for (let col of cols){
        //let count = 0;
        for (let i = 0; i < col.length - 1; i++){
            let count = 0;
            let curr = col[i];
            let next = col[i + 1];
            if (next <= curr){
                count+= (curr - next + 1);
                col[i + 1] = next + (curr - next + 1);
            }
            ops+= count;
        }
    }
    return ops
};