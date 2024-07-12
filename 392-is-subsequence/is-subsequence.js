/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let sTracker = 0;
    let tTracker = 0;
    while (tTracker < t.length){
        if (s[sTracker] === t[tTracker]){
            sTracker++;
        }
        tTracker++;
    }
    if (sTracker < s.length){
        return false;
    }
    return true;

    
    
};