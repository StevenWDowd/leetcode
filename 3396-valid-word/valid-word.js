/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if (word.length < 3) return false;
    //const exp = /[a-zA-Z0-9]/;
    //if (!exp.test(word)) return false;
    const digs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const vows = ['a', 'e', 'i', 'o', 'u'];
    const cons = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p',
                    'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    const digSet = new Set(digs);
    const vowSet = new Set(vows);
    const conSet = new Set(cons);
    let vowFound = false;
    let consFound = false;
    for (let char of word.toLowerCase()){
        if (!vowSet.has(char) && !conSet.has(char) && !digSet.has(char)) return false;
        if (vowSet.has(char)) vowFound = true;
        if (conSet.has(char)) consFound = true;
    }

    if (vowFound && consFound) return true;
    return false;

};