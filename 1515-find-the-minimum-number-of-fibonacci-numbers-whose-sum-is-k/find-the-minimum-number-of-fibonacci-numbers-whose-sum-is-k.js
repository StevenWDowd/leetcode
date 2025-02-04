/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function(k) {
    let count = 0;
    //subtract largest possible fib from k
    //repeat till 0;
    //(can always subtract a bunch of 1s if need be)
    while (fibs[fibs.length - 1] < k){
        genFib();
    }
    //last is where we start
    let idx = fibs.length - 1;
    while (k > 0){
        let curr = fibs[idx];
        while(curr > k){
            idx--;
            curr = fibs[idx];
        }
        while (curr <= k){
            k-= curr;
            count++;
        }

    }
    return count;
};

const fibs = [1, 1];

function genFib(){
    let newNum = fibs[fibs.length - 1] + fibs[fibs.length - 2];
    fibs.push(newNum);
}