/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let balancedCount = 0;
    let rCount = 0;
    let lCount = 0;
    let idx = 0;
    while (idx < s.length){
        let current = s[idx];
        if (current === 'R') rCount++;
        if (current === 'L') lCount++;
        if (rCount === lCount){
            balancedCount++;
            rCount = 0;
            lCount = 0;
        }
        idx++;
    }
    return balancedCount;
};