/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let ops = 0;
    for (let num of nums){
        //any %3 other than 0 can be corrected in one op, yes?
        if (num % 3 !== 0) ops++;
    }
    return ops;
};