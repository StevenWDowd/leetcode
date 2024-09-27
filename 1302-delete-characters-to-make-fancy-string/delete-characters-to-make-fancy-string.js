/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    const splitS = s.split('');
    let left = 0;
    let right = 2;
    while (right < splitS.length){
        let first = splitS[left];
        let second = splitS[left+1];
        let third = splitS[right];
        if (first === second && second === third) splitS[left] = '';
        left++;
        right++;
    }
    return splitS.join('');
};