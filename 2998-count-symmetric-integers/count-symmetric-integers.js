/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let count = 0;
    let curr = low;
    while (curr <= high){
        let strNum = curr.toString();
        if (strNum.length % 2 === 0){
            //console.log('possible hit: ', curr);
            let n = strNum.length / 2;
            let first = 0;
            let second = 0;
            for (let i = 0; i < n; i++ ){
                let digit = strNum[i];
                first+= Number(digit);
            }
            for (let i = n; i < n*2; i++){
                let digit = strNum[i];
                second+= Number(digit);
            }
            if (first === second) count++;
        }
        curr++;
    }
    return count;
    
};