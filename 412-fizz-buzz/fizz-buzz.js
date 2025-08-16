/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    //lol
    const ans = [];
    let step = 1;
    while (step < n + 1){
        if (step % 3 === 0 && step % 5 === 0){
            ans.push("FizzBuzz");
        } else if (step % 3 === 0){
            ans.push("Fizz");
        } else if (step % 5 === 0){
            ans.push("Buzz");
        } else {
            ans.push(`${step}`);
        }
        step++;
    }
    return ans;
};