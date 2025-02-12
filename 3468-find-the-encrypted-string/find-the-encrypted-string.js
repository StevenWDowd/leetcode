/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let len = s.length;
    const crypt = [];
    for (let i = 0; i < len; i++){
        let dex = (i + k) % len;
        crypt.push(s[dex]);
    }
    return crypt.join('');
};