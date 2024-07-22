/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    //const secretDict = new Map();
    //should map slot -> char, not char -> slot
    // for (let i = 0; i < secret.length; i++){
    //     let char = secret[i];
    //     if (secretDict.has(char)){
    //         let slot = secretDict.get(char);
    //         slot.push(i);
    //     } else {
    //         secretDict.set(char, [i]);
    //     }
    // }

    // console.log('map is: ', secretDict);
    // let cows = 0;
    // let bulls = 0;

    // for (let i = 0; i < guess.length; i++){
    //     let char = guess[i];
    //     if (secretDict.has(char)){
    //         let slots = secretDict.get(char);
    //         if (slots.includes(i)) {
    //             bulls++;
    //         } else {
    //             cows++;
    //         }
    //     } else {
    //         //do nothing
    //     }
    // }
    // return bulls + 'A' + cows + 'B';
    
    const slotMap = new Map();
    const freqMap = new Map();
    for (let i = 0; i < secret.length; i++){
        let digit = secret[i];
        slotMap.set(i, digit);
        if (freqMap.has(digit)){
            let currVal = freqMap.get(digit);
            freqMap.set(digit, currVal + 1);
        } else {
            freqMap.set(digit, 1);
        }
    }

    let cows = 0;
    let bulls = 0;

    for (let i = 0; i < guess.length; i++){
        let digit = guess[i];
        if (slotMap.get(i) === digit){
            bulls++;
            let currVal = freqMap.get(digit);
            freqMap.set(digit, currVal - 1);
        // } else if (freqMap.has(digit)) {
        //     //cows++;
        //     let currVal = freqMap.get(digit);
        //     if (currVal > 0) cows++;
        //     freqMap.set(digit, currVal - 1);
        // } else {
        //     //do nothing
        // }
    }
    }
    console.log('freqmap: ', freqMap);

    for (let i = 0; i < guess.length; i++){
        let digit = guess[i];
        if (freqMap.has(digit) && digit !== secret[i]) {
            //cows++;
            let currVal = freqMap.get(digit);
            if (currVal > 0) cows++;
            freqMap.set(digit, currVal - 1);
        } else {
            //do nothing
        }
    }

    return bulls + 'A' + cows + 'B';

};