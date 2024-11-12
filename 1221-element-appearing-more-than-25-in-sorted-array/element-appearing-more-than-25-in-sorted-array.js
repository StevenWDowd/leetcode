/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let target = Math.floor(arr.length/4);
    let reps = 0;
    let idx = 0;
    while (idx < arr.length){
        let curr = arr[idx];
        if (reps === 0){
            reps++;
        } else if (curr === arr[idx - 1]){
            reps++;
        } else {
            //reps = 0;
            reps = 1;
        }
        if (reps > target) return curr;
        idx++;
    }
    if (arr[arr.length -1] === arr[arr.length-2]) reps++;
    console.log('reps is: ', reps);
    console.log('target is: ', target);
    if (reps > target) return arr[idx - 1];
    return -1;
};