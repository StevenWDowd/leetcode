/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    const boxMap = new Map();
    let num = lowLimit;
    while (num < highLimit + 1){
        let box = addDigits(num);
        if (boxMap.has(box)){
            boxMap.set(box, boxMap.get(box) + 1);
        } else {
            boxMap.set(box, 1);
        }
        num++;
    }
    let counts = Array.from(boxMap.values());
    counts.sort((a,b) => b-a);
    return counts[0];
    
};

function addDigits(num){
    let final = 0;
    while (num > 9){
        let rem = num % 10;
        num = (num - rem) / 10;
        final+= rem;
    }
    final+= num;
    return final;
}