/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows <= 1){
        return s;
    }
    const finalArr = [];
    let goingDown = true;
    let rowIdx = 0;
    //create array of arrays for the lines
    for (let i = 0; i < numRows; i++){
        finalArr.push([]);
    }
    for (let i = 0; i < s.length; i++){
        let char = s[i];
        finalArr[rowIdx].push(char);
        if (rowIdx < numRows - 1 && goingDown){
            rowIdx++;
        } else if (rowIdx === numRows -1){
            rowIdx--;
            goingDown = false;
        } else if (rowIdx === 0 && !goingDown){
            goingDown = true;
            rowIdx++;
        } else if (rowIdx < numRows - 1 && !goingDown){
            rowIdx--;
        }
    }

    const flattened = finalArr.flat();
    return flattened.join('');

    
};