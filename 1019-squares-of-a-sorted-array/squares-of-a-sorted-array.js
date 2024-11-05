/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let squares = [...nums];
    for (let i = 0; i < squares.length; i++){
        squares[i] = squares[i]**2;
    }
    return squares.sort((a,b) => a - b);
};