/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    const singles = nums.filter((num) => num < 10);
    const doubles = nums.filter((num) => num > 9 && num < 100);
    const nonSings = nums.filter((num) => num > 9);
    const nonDubs = nums.filter((num) => num < 10 || num > 99);

    const singSum = singles.reduce((acc, current) => acc + current, 0);
    const dubSum = doubles.reduce((acc, current) => acc + current, 0);
    const nonSingSum = nonSings.reduce((acc, current) => acc + current, 0);
    const nonDubSum = nonDubs.reduce((acc, current) => acc + current, 0);

    return (singSum > nonSingSum) || (dubSum > nonDubSum);
};