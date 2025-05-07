/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num < 2) return false;
    //could also just add factors up without last entry, rather than start with 1 in array
    const factors = [1];
    let bound = Math.floor(Math.sqrt(num));
    let n = 2;
    while (n <= bound){
        if (num % n === 0){
            let res = num / n;
            factors.push(n);
            factors.push(res); 
        }
        n++;
    }
    let sum = 0;
    for (let factor of factors){
        sum+= factor;
    }
    console.log('sum is: ', sum);
    console.log('factors are: ', factors);
    return sum === num;
};