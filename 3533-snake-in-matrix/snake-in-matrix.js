/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let row = 0;
    let col = 0;

    for (let command of commands){
        if (command === "UP") row--;
        if (command === "DOWN") row++;
        if (command === "LEFT") col--;
        if (command === "RIGHT") col++;
    }

    return (row * n) + col;
};