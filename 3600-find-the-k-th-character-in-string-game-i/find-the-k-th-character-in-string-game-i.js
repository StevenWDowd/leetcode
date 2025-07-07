/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    //let counter = k;
    const chars = ['a'];
    while (chars.length < k){
        let bound = chars.length;
        for (let i = 0; i < bound; i++){
            chars.push(nextChar(chars[i]));
        }
        
        //counter--;
    }
    console.log('chars is: ', chars);
    return chars[k - 1];
};

function nextChar(char){
    if (char === 'z'){
        return 'a';
    } else {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }
}