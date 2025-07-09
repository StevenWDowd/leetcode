/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    //let finished = false;
    for (let row of grid){
        let inPlus = true;
        let idx = 0;
        while (inPlus && idx < row.length){
            let num = row[idx];
            if (num > -1){
                count++;
            } else {
                inPlus = false;
            }
            idx++;
        }
        //if (!inPlus) break;
    }
    return (grid.length * grid[0].length) - count;
};