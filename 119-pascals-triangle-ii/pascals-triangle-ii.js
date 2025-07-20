/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowDict.has(rowIndex)){
        return rowDict.get(rowIndex);
    } else {
        let currMax = rowsPresent[rowsPresent.length - 1];
        while(currMax < rowIndex + 1){
            let lastRow = rowDict.get(currMax);
            let newRow = nextRow(lastRow);
            rowDict.set(currMax + 1, newRow);
            currMax++;
            rowsPresent.push(currMax);
        }
        return rowDict.get(rowIndex);
    }
};

let rowsPresent = [0,1];
let rowDict = new Map();
rowDict.set(0, [1]);
rowDict.set(1, [1,1]);

function nextRow(row){
    let final = [];
    let idx = 0;
    final.push(row[0]);
    while (idx < row.length -1){
        let num = row[idx] + row[idx + 1];
        final.push(num);
        idx++;
    }
    final.push(row[row.length - 1]);
    return final;
}