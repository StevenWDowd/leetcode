/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let score = 0;
    //sort, find greatest?
    let sortedNums = [...nums].sort((a,b) => b-a);

    let best = sortedNums[0];
    score+= best;
    k--;
    while(k > 0){
        best+= 1;
        score+= best;
        k--;
    }
    return score;

};