/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const colMap = new Map([
        ['A',1],
        ['B',2],
        ['C',3],
        ['D',4],
        ['E',5],
        ['F',6],
        ['G',7],
        ['H',8],
        ['I',9],
        ['J',10],
        ['K',11],
        ['L',12],
        ['M',13],
        ['N',14],
        ['O',15],
        ['P',16],
        ['Q',17],
        ['R',18],
        ['S',19],
        ['T',20],
        ['U',21],
        ['V',22],
        ['W',23],
        ['X',24],
        ['Y',25],
        ['Z',26],
    ])
    //with right as 0, each is lookup val * 26 to the Nth
    let total = 0;
    let pow = 0;
    let idx = columnTitle.length - 1;
    while(idx > -1){
        let curr = columnTitle[idx];
        total+= colMap.get(curr) * (26**pow);
        idx--;
        pow++;
    }
    return total;
};