/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let answer = init;
    for (let num of nums){
        answer = fn(answer, num);
    }
    return answer;
};