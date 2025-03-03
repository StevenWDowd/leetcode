/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const widths = [];
    for (let i = 0; i < grid[0].length; i++){
        let nums = [];
        let max = 0;
        for (let row of grid){
            nums.push(row[i]);
        }
        for (let num of nums){
            if (num.toString().length > max) max = num.toString().length;
        }
        widths.push(max);
    }
    return widths;
};