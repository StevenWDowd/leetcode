/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let currMax = 0;
    let newArr = [];
    let idx = arr.length -1;
    //push -1 at end, after reverse
    while (idx > 0){
        let curr = arr[idx];
        if (curr > currMax) currMax = curr;
        newArr.push(currMax);
        idx--;
    }
    newArr.reverse();
    newArr.push(-1);
    return newArr;
};