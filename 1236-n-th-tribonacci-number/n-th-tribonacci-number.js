/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if (tribDict.has(n)) return tribDict.get(n);
    let answer = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
    tribDict.set(n, answer);
    return answer;
};

const tribDict = new Map([
    [0, 0],
    [1, 1],
    [2, 1],
]);
