/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    function signFunc(x){
        if (x > 0) return 1;
        if (x < 0) return -1;
        return 0;
    }
    let product = 1;
    for (let num of nums){
        product = product * num;
    }
    return signFunc(product);
};