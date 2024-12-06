/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let charNo = word.length;
    //have 8 keys to work with
    //max of 26 letters
    //map first 8 to 1 press
    //second 8 to 2 presses
    //third 8 to three presses
    //remaining 2 to four presses
    if (charNo <= 8) return charNo;
    let presses = 0;
    let keySet = 1; //goes to 2 after first 8, etc.
    while (charNo > 8){
        charNo-= 8;
        presses+= (8*keySet);
        keySet++;
    }
    presses+= (charNo*keySet);
    return presses;
};