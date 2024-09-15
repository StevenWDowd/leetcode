/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const answer = [...matrix];

     for (let i = 0; i < matrix.length; i++){
        let row = answer[i];
        for (let j = 0; j < row.length; j++){
            let num = row[j];
            if (num !== -1){
                //nothing
            } else {
                row[j] = maxInCol(answer, j);
            }
        }
     }
     return answer;
    

    //
    
};

function maxInCol(matrix, col){
    let hiScore = 0;
    for (let i = 0; i < matrix.length; i++){
        let current = matrix[i][col];
        if (current > hiScore) hiScore = current;
    }
    return hiScore;
}