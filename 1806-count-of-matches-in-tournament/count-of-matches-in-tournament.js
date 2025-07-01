/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let remaining = n;
    let matches = 0;
    while (remaining > 1){
        if (remaining % 2 === 0){
            remaining/= 2;
            matches+= remaining;
        } else {
            let played = (remaining - 1) / 2;
            matches+= played;
            remaining = ((remaining - 1) / 2) + 1;
        }
    }
    return matches;
    
};