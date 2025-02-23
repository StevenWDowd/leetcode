/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function(arr, k) {
    const strongList = [];
    arr.sort((a,b) => a-b);
    let med = arr[Math.floor((arr.length - 1) / 2)];
    arr.sort((a,b) => {
        if (Math.abs(a - med) > Math.abs(b - med)) return -1;
        if (Math.abs(a - med) < Math.abs(b - med)) return 1;

        if (a > b) return -1;
        if (a < b) return 1;
    })

    //console.log('median is: ', med);
    //console.log('arr is now: ', arr);
    for (let i = 0; i < k; i++){
        strongList.push(arr[i]);
    }
    return strongList;

};