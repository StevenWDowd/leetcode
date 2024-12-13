/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    const highs = [];
    let ops = 0;
    while (ops <= grid[0].length){
        let bests = [];
        for (let row of grid){
            let max = 0;
            let spot = 0;
            for (let i = 0; i < row.length; i++){
                if (row[i] > max){
                    max = row[i];
                    spot = i;
                }
            }
            row[spot] = -1;
            bests.push(max);
        }
        ops++;
        highs.push(Math.max(...bests));
    }
    let ans = 0;
    for (let num of highs){
        ans+= num;
    }
    return ans;
};