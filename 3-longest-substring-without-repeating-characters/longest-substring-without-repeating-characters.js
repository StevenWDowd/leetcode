/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let left = 0;
    let right = 1;
    let max = 1;
    const subSet = new Set();
    subSet.add(s[0]);
    while (right < s.length && left <= right){
        let start = s[left];
        let end = s[right];
        subSet.add(end);
        if (subSet.size < (right - (left-1))){
            //means added end char was not new
            //remove from left until this is no longer true
            subSet.delete(start);
            left++;
        } else {
            //added end char was new/unique
            if (subSet.size > max) max = subSet.size;
            right++;
        }
    }
    return max;
};