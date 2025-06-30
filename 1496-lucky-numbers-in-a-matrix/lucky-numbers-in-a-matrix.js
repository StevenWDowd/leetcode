/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    const rowMins = new Set();
    const colMaxs = new Set();
    for (let row of matrix){
        rowMins.add(Math.min(...row));
    }
    for (let i = 0; i < matrix[0].length; i++){
        let col = [];
        for (let j = 0; j < matrix.length; j++){
            col.push(matrix[j][i]);
        }
        colMaxs.add(Math.max(...col));
    }
    const luckies = [];
    for (let num of rowMins){
        if (colMaxs.has(num)) luckies.push(num);
    }
    //console.log('rowMins is: ', rowMins);
    //console.log('colMaxs is: ', colMaxs);
    //console.log('luckies is: ', luckies);
    return luckies;
};