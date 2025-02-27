/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {
    let conVal = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left < right){
        let front = nums[left];
        let back = nums[right];
        let concat = front.toString() + back.toString();
        conVal+= Number(concat);
        left++;
        right--;
    }
    if (nums.length % 2 !== 0){
        conVal+= nums[left];
    }
    return conVal;
};