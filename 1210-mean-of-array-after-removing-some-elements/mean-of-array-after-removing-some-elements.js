/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function(arr) {
    arr.sort((a,b) => a-b);
    let size = arr.length;
    let cut = Math.floor(size * 0.05); //don't need to be careful, but still
    let left = 0;
    let right = size - 1;
    let postCut = size - (2*cut);
    while (cut > 0){
        left++;
        right--;
        cut--;
    }
    let total = 0;
    for (let i = left; i < right + 1; i++){
        total+=arr[i];
    }
    return (total / postCut);
};