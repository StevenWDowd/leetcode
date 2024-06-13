/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sCounter = {};
    for (let char of s){
        sCounter[char] = sCounter[char] + 1 | 1;
    }
    const tCounter = {};
    for (let char of t){
        tCounter[char] = tCounter[char] + 1 | 1;
    }

    for (let char of s){
        if (sCounter[char] !== tCounter[char]){
            return false;
        }
    }

    for (let char of t){
        if (sCounter[char] !== tCounter[char]){
            return false;
        }
    }

    return true;
};