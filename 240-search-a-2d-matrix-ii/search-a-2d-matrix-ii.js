/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //let searching = true;
//     let currRow = 0;
//     let currCol = 0;
//     if (matrix[0][0] > target) return false;
//     if (matrix[0][0] === target) return true;
//     while (currRow < matrix.length && currCol < matrix[0].length){
//         //check 1st el of row: if less and in row 0, return false
//         let row = matrix[currRow];
//         //if (currRow === 0 && row[0] > target) return false;
//         //search horiz and then vert?
//         if (target > row[row.length - 1]){
//             currRow++;
//         } else {
//             //search along row
//             // for (let i = currCol; i < row.length; i++){
//             //     if (row[i] === target) return true;
//             // }
//             if (rowBinSearch(row, currCol, target)) return true;
//             currRow++;
//         }
//         if (target > matrix[matrix.length - 1][currCol]){
//             currCol++;
//         } else {
//             //search along column
//             //maybe an issue of incrementing row first? skipping corner?
//             //shouldn't matter, I think
//             // for (let i = currRow; i < matrix.length; i++){
//             //     if (matrix[i][currCol] === target) return true;
//             // }
//             if (colBinSearch(matrix, currCol, currRow, target)) return true;
//             currCol++;
//         }
//     }
//     return false;
// };

// function rowBinSearch(arr, start, target){
//     let left = start;
//     //let left = 0;
//     let right = arr.length - 1;
//     while (left < right){
//         let mid = Math.ceil((left + right)/2);
//         console.log('arr is: ', arr);
//         console.log('mid is: ', mid);
//         if (arr[mid] === target || arr[left] === target || arr[right] === target) return true;
//         if (arr[mid] > target){
//             right = mid - 1;
//         } else if (arr[mid] < target){
//             left = mid + 1;
//         }
//     }

//     return false;

//start top-right
let currRow = 0;
let currCol = matrix[0].length - 1;

let current = matrix[currRow][currCol];

while (currRow < matrix.length && currCol > -1){
    console.log('current is: ', current);
    if (current === target) return true;
    if (current > target){
        currCol--;
        if (currCol < 0) return false;
        current = matrix[currRow][currCol];
    } else {
        currRow++;
        if (currRow >= matrix.length) return false;
        current = matrix[currRow][currCol];
    }
}
return false;

}

function colBinSearch(matrix, col, start, target){
    //let left = 0;
    let left = start;
    let right = matrix.length - 1;
    while (left < right){
        let mid = Math.ceil((left + right)/2);
        if (matrix[mid][col] === target || matrix[left][col] === target || matrix[right][col] === target) return true;
        if (matrix[mid][col] > target){
            right = mid - 1;
        } else if (matrix[mid][col] < target){
            left = mid + 1;
        }
    }
    return false;
}