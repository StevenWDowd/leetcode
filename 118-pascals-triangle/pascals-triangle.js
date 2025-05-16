/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const rows = [];
    let idx = 1;
    while (idx < numRows + 1){
        if (rowDict.has(idx)){
            rows.push(rowDict.get(idx));
        } else {
            let newRow = nextRow(rowDict.get(idx - 1));
            rows.push(newRow);
            rowDict.set(idx, newRow);
        }
        idx++;
    }

    return rows;
    
};

let rowDict = new Map();
rowDict.set(1, [1]);
rowDict.set(2, [1,1]);

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
