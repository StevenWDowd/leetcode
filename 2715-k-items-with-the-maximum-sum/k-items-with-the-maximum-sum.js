/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    let ans = 0;
    let steps = k;
    if (k <= numOnes) return k;
    ans+= numOnes;
    steps-= numOnes;
    while (steps > 0 && numZeros > 0){
        steps--;
        numZeros--;
    }

    while (steps > 0 && numNegOnes > 0){
        steps--;
        numNegOnes--;
        ans--;
    }

    return ans;
};