/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let idx = 0;
    while (idx < arr.length){
        if (arr[idx] === 0){
            addZero(arr, idx);
            idx+= 2;
        } else {
            idx++;
        }
    }
};

function addZero(arr, idx){
    //arr.push(0);
    let marker = arr.length-1;
    arr[marker] = 0;
    while (marker > idx){
        let curr = arr[marker];
        let prev = arr[marker-1];
        arr[marker] = prev;
        arr[marker-1] = curr;
        marker--;
    }
}