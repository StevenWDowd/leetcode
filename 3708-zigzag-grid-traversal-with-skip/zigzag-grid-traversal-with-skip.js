/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    const result = [];
    let row = 0;
    let goLeft = true;
    let skip = false;
    while (row < grid.length){
        let curr = grid[row];
        let idx;
        if (goLeft){
            idx = 0;
            if (skip) idx++;
            while (idx < curr.length){
                if (idx === curr.length - 1){
                    skip = true;
                } else {
                    skip = false;
                }
                result.push(curr[idx]);
                idx+=2;
            }
        } else {
            idx = curr.length - 1;
            if (skip) idx--;
            while (idx > -1){
                if (skip === 0){
                    skip = true;
                } else {
                    skip = false;
                }
                result.push(curr[idx]);
                idx-=2;
            }
        }
        row++;
        goLeft = !goLeft;

    }
    return result;
};