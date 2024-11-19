/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    //want to maximize 1s in leftmost columns
    for (let row of grid){
        if (row[0] === 0) flipRow(row);
    }

    //if a col has more 0s than 1s, flip it
    for (let i = 0; i < grid[0].length; i++){
        if (countCol(grid, i) < Math.ceil(grid.length/2)) {
            flipCol(grid, i);
            //console.log('column flipped');
            }

    }
    //console.log('current grid is: ', grid);
    let score = 0;
    for (let row of grid){
        //add up binary
        let pow = 0;
        let num = 0;
        let lim = row.length;
        while (pow < lim){
            let dig = row.pop();
            if (dig === 1) num+= 2**pow;
            pow++;
        }
        score+= num;
    }
    return score;

};

function flipRow(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 1){
            arr[i] = 0;
        } else {
            arr[i] = 1;
        }
    }
}

function flipCol(matrix, idx){
    for (let row of matrix){
        let targ = row[idx];
        if (targ === 1){
            row[idx] = 0;
        } else {
            row[idx] = 1;
        }
    }
}

function countCol(matrix, idx){
    let oneCount = 0;
    for (let row of matrix){
        if (row[idx] === 1) oneCount++;
    }
    return oneCount;

}