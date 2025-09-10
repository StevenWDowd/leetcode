/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let aCount = 0;
    let lateStreak = 0;
    let inStreak = false;
    for (let i = 0; i < s.length; i++){
        let curr = s[i];
        if (curr === 'L' && !inStreak){
            inStreak = true;
            lateStreak = 0;
            lateStreak++;
        } else if (curr === 'L' && inStreak){
            lateStreak++;
            if (lateStreak > 2) return false;
        } else if (curr === 'A'){
            inStreak = false;
            aCount++;
        } else {
            inStreak = false;
        }
    }
    if (aCount < 2) return true;
    return false;
};