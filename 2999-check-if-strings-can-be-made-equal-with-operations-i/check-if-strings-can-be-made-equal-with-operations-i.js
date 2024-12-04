/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    //can only swap even with even and odd with odd, right?
    //length of 4? huh, pays to read
    //can swap idx 0 with 2, or idx 1 with 3
    if ((s1[0] === s2[0] && s1[2] === s2[2]) || (s1[0] === s2[2] && s1[2] === s2[0])){
        if ((s1[1] === s2[1] && s1[3] === s2[3]) || (s1[1] === s2[3] && s1[3] === s2[1])) return true;
    }
    return false;
    
};