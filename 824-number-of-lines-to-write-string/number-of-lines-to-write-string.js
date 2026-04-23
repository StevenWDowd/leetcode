/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    //const result = [];
    let letter = 'a';
    //map chars to given widths
    const wMap = new Map();
    let idx = 0;
    while (wMap.size < widths.length){
        wMap.set(letter, widths[idx]);
        letter = letter.substring(0, letter.length - 1)
        + String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
        idx++;
    }
    idx = 0;
    let lines = 1;
    let pixels = 0;
    while (idx < s.length){
        let curr = s[idx];
        let width = wMap.get(curr);
        if (pixels + width < 101){
            pixels+=width;
        } else {
            lines++;
            pixels = width;
        }
        idx++;
    }
    return [lines, pixels];

    

};