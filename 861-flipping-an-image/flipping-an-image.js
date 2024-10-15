/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const flipped = [];
    for (let row of image){
        let newRow = [];
        for (let i = row.length - 1; i >= 0; i--){
            let current = row[i];
            if (current === 1){
                newRow.push(0);
            } else {
                newRow.push(1);
            }
        }
        flipped.push(newRow);
    }
    return flipped;
};