/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let pos = [0,0];
    for (let move of moves){
        if (move === 'R') pos[0]+= 1;
        if (move === 'L') pos[0]-= 1;
        if (move === 'U') pos[1]+= 1;
        if (move === 'D') pos[1]-= 1;
    }
    return (pos[0] === 0 && pos[1] === 0);
};