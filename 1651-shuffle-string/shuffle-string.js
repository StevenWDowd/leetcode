/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const answer = new Array(s.length);
    for (let i = 0; i < s.length; i++){
        // let char = s[i];
        // let newDex = indices[i];
        answer[indices[i]] = s[i];
    }
    return answer.join('');

};