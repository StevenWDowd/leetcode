/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {
    let placeholder = n;
    let binary;
    if (sMap.has(n)) {
        binary = sMap.get(n);
    } else {
        placeholder--;
        while(!sMap.has(placeholder)){
            placeholder--;
        }
        let curr = sMap.get(placeholder);
        while(placeholder < n){
            let next = generateS(curr);
            curr = next;
            placeholder++
            sMap.set(placeholder, curr);
        }
        binary = curr;
    }
    //console.log('sMap is: ', sMap);
    //console.log('binary is: ', binary);
    return binary[k - 1];

};

//takes string s(i-1), outputs si
function generateS(prev){
    //invert s
    //console.log('prev is: ', prev);
    let inverted = [];
    for (let i = 0; i < prev.length; i++){
        if (prev[i] === '0'){
            inverted.push('1');
        } else {
            inverted.push('0');
        }
    }
    //console.log('inverted is currently: ', inverted);
    //reverse
    // let reversed = [];
    // for (let i = inverted.length - 1; i--; i >-1){
        
    // }
    inverted.reverse();
    //console.log('inverted is now: ', inverted);
    return [prev].concat(['1']).concat(inverted).join('');
}

const sMap = new Map();
sMap.set(1, '0');