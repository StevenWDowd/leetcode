/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    //longest word is length of matrix
    let splitS = s.split(' ');
    const vertMatrix = [];
    let max = 0;
    for (let word of splitS){
        if (word.length > max) max = word.length;
    }
    while (vertMatrix.length < max){
        vertMatrix.push([]);
    }
    for (let i = 0; i < max; i++){
        for (let word of splitS){
            //console.log('column is ', i);
            if (word[i]){
                vertMatrix[i].push(word[i]);
            } else {
                //console.log(vertMatrix);
                vertMatrix[i].push(' ');
            }
        }
    }

    let finalMat = [];
    for (let row of vertMatrix){
        finalMat.push(row.join('').trimEnd());
    }
    return finalMat;
};