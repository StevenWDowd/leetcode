/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    const wordDict = new Map([
        [1, 'A'],
        [2, 'B'],
        [3, 'C'],
        [4, 'D'],
        [5, 'E'],
        [6, 'F'],
        [7, 'G'],
        [8, 'H'],
        [9, 'I'],
        [10, 'J'],
        [11, 'K'],
        [12, 'L'],
        [13, 'M'],
        [14, 'N'],
        [15, 'O'],
        [16, 'P'],
        [17, 'Q'],
        [18, 'R'],
        [19, 'S'],
        [20, 'T'],
        [21, 'U'],
        [22, 'V'],
        [23, 'W'],
        [24, 'X'],
        [25, 'Y'],
        [26, 'Z']
    ])

    let count = columnNumber;
    let answerArr = [];
    while (count > 26){
        let remainder = count % 26;
        if (remainder !== 0){
            answerArr.push(wordDict.get(remainder));
            count = (count - remainder) / 26;
        } else {
            answerArr.push('Z');
            count = (count - 26) / 26;
        }
        
    }
    answerArr.push(wordDict.get(count));
    answerArr.reverse();
    return answerArr.join('');
    
};