/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const finalArr = [];
    const sortedNums = nums.sort((a,b) => b - a);

    while (sortedNums.length){
        let alice = sortedNums.pop();
        let bob = sortedNums.pop();
        finalArr.push(bob);
        finalArr.push(alice);
    }
    return finalArr;
};