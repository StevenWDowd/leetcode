/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const charMap = new Map();
    const dists = [];
    for (let char of arr){
        if (charMap.has(char)){
            charMap.set(char, charMap.get(char) + 1);
        } else {
            charMap.set(char, 1);
        }
    }

    for (let [char, count] of charMap){
        if (count === 1) dists.push(char);
    }

    if (k > dists.length) return '';

    return dists[k-1];
};