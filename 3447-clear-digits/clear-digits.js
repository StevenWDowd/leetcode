/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];
    let skips = 0;
    const digiDict = {
        '0':true,
        '1':true,
        '2':true,
        '3':true,
        '4':true,
        '5':true,
        '6':true,
        '7':true,
        '8':true,
        '9':true,
    }
    for (let char of s){
        stack.push(char);
        //if (digiDict[char]) skipcount++;
    }

    const answerArr = [];
    while (stack.length){
        let current = stack.pop();
        if (digiDict[current]){
            skips++;
        } else {
            if (skips > 0){
                skips--;
            } else {
                answerArr.push(current);
            }
        }
    }

    let reversed = answerArr.reverse();
    return answerArr.join('');
};