/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    //final char is highest number
    const numLimit = Number(s[s.length - 1]) + 1;
    const charLimit = s[s.length - 2];
    const cells = [];
    let curr = s[0];
    while (curr <= charLimit){
        let num = Number(s[1]);
        while (num < numLimit){
            let coord = `${curr}${num}`;
            cells.push(coord);
            num++;
        }
        curr = nextChar(curr);
    }
    return cells;
    

};

function nextChar(char){
    return String.fromCharCode(char.charCodeAt(0) + 1);
}