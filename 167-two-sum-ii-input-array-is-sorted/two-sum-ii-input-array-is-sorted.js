/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right){
        let candidateSum = numbers[left] + numbers[right];
        if (candidateSum === target){
            return [left+1, right+1];
        }
        if (candidateSum > target){
            right--;
        }

        if (candidateSum < target){
            left++;
        }
    }
    return [-1, -1];
};