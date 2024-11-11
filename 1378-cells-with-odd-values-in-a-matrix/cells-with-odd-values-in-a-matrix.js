/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const matrix = [];
    let count = m;
    //whatever, I'm bruteforcing it
    while (count > 0){
        let row = new Array(n).fill(0);
        matrix.push(row);
        count--;
    }
    for (let pair of indices){
        let r = pair[0];
        let c = pair[1];
        let targRow = matrix[r];
        for (let i = 0; i < targRow.length; i++){
            targRow[i] = targRow[i] + 1;
        }
        for (let i = 0; i < m; i++){
            let curr = matrix[i];
            curr[c] = curr[c] + 1;
        }
    }

    let oddCount = 0;
    for (let row of matrix){
        for (let num of row){
            if (num % 2 !== 0) oddCount++;
        }
    }
    return oddCount;
    //how to derive result w/o building the matrix?
    //for idx pair [x, y] => if entry is 1, increment either row or col (x or y)
    //keep maps for rows and cols? then add up odd vals, subtract collisions?


};