/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const spiraled = [];
    let x = 0;
    let y = 0;
    let topLim = 0;
    let botLim = matrix.length - 1;
    let leftLim = 0;
    let rightLim = matrix[0].length -1;
    let lastTurn = 'tL';

    while(spiraled.length < (matrix.length * matrix[0].length)){
        console.log('last turn was: ', lastTurn);
        let current = matrix[x][y];
        spiraled.push(current);
        if (lastTurn === 'tL'){
            //are we at right bound?
            if (y === rightLim){
                x++;
                lastTurn = turnHelper(lastTurn);
                topLim++;
            } else {
                //move right
                y++;
            }
        }else if (lastTurn === 'tR'){
            //reached bottom?
            if (x === botLim){
                y--;
                lastTurn = turnHelper(lastTurn);
                rightLim--;
            } else {
                //move down
                x++;
            }

        } else if (lastTurn === 'bL'){
            //reached top again?
            if (x === topLim){
                y++;
                lastTurn = turnHelper(lastTurn);
                leftLim++;
            } else {
                //move up
                x--;
            }

        }else if (lastTurn === 'bR'){
            //reached bottom left corner?
            if (y === leftLim){
                x--;
                lastTurn = turnHelper(lastTurn);
                botLim--;
            } else {
                console.log('leftLim is: ', leftLim);
                console.log('y is: ', y);
                //keep going left
                y--;
            }
        }
    }
    return spiraled;
};

function turnHelper(lastBound){
    if (lastBound === 'tL') return 'tR';
    if (lastBound === 'tR') return 'bR';
    if (lastBound === 'bR') return 'bL';
    if (lastBound === 'bL') return 'tL';
}