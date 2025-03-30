/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    const charMap = new Map(
        [['a', 1],
        ['b', 2],
        ['c',3],
        ['d',4],
        ['e',5],
        ['f',6],
        ['g', 7],
        ['h',8],
        ['i',9],
        ['j',10],
        ['k',11],
        ['l',12],
        ['m',13],
        ['n',14],
        ['o',15],
        ['p',16],
        ['q',17],
        ['r',18],
        ['s',19],
        ['t',20],
        ['u',21],
        ['v',22],
        ['w',23],
        ['x',24],
        ['y',25],
        ['z',26],]
    );
    let digStrArr = [];
    for (let char of s){
        digStrArr.push(charMap.get(char).toString());
    }
    let digStr = digStrArr.join('');
    function strSum(str){
        let sum = 0;
        for (let char of str){
            sum+=Number(char);
        }
        return sum.toString();
    }
    while (k > 0){
        digStr = strSum(digStr);
        k--;
    }
    return Number(digStr);

};
