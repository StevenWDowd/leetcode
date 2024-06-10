/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //water limited by the shorter of the two line heights
    //pointers start at either end
    //length is right - left
    let bestArea = 0; //water would be volume, but whatever
    let left = 0;
    let right = height.length - 1;
    while (left < right){
        let area = (right - left) * Math.min(height[left], height[right]);
        if (area > bestArea){
            bestArea = area;
        }

        if (height[left] <= height[right]){
            left++;
        } else {
            right--;
        }
    }

    return bestArea;
    
};