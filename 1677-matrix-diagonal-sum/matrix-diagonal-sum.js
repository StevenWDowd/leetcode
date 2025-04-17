/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let downR = [0,0];
    let downL = [0, mat[0].length - 1];
    while (downR[0] < mat.length){
        if (downR[0] === downL[0] && downR[1] === downL[1]) {
            sum+= mat[downR[0]][downR[1]];
            } else {
                sum+= mat[downR[0]][downR[1]];
                sum+= mat[downL[0]][downL[1]];
            }
            downR[0] = downR[0] + 1;
            downR[1] = downR[1] + 1;
            downL[0] = downL[0] + 1;
            downL[1] = downL[1] - 1;
    }
    return sum;
    
};