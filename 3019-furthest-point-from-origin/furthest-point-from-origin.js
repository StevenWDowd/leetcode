/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let goLeft = [...moves];
    let goRight = [...moves];
    for (let i = 0; i < moves.length; i++){
        if (goLeft[i] === '_') goLeft[i] = 'L';
        if (goRight[i] === '_') goRight[i] = 'R';
    }
    let lSum = 0;
    let rSum = 0;
    for (let move of goLeft){
        if (move === 'L') lSum++;
        if (move === 'R') lSum--;
    }
    for (let move of goRight){
        if (move === 'L') rSum--;
        if (move === 'R') rSum++;
    }
    return Math.max(lSum, rSum);
};