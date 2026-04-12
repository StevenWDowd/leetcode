/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const answer = [];
    //n digits -> 3^n possibilities, but 9, 7 have 4 options
    //each answer will be the same length
    const completes = [];
    const unfinished = [[]];
    const maxLen = digits.length;
    while (unfinished.length){
        let piece = unfinished.shift();
        if (piece.length === maxLen){
            completes.push(piece);
        } else {
            //get next digit
            //length of piece is index of next dig
            let dig = digits[piece.length];
            let chars = numDict.get(dig);
            for (let char of chars){
                let newPiece = [...piece];
                newPiece.push(char);
                unfinished.push(newPiece);
            }
        }
    }
    //console.log('completes is: ', completes);
    for (let arr of completes){
        answer.push(arr.join(''));
    }
    return answer;
    
};

const numDict = new Map([
    ['0', []],
    ['1', []],
    ['2', ['a', 'b', 'c']],
    ['3', ['d', 'e', 'f']],
    ['4', ['g', 'h', 'i']],
    ['5', ['j', 'k', 'l']],
    ['6', ['m', 'n', 'o']],
    ['7', ['p', 'q', 'r', 's']],
    ['8', ['t', 'u', 'v']],
    ['9', ['w', 'x', 'y', 'z']],
])