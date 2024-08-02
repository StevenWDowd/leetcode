/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (stairMap.has(n)){
        return stairMap.get(n);
    }
    let newEntry = climbStairs(n-1) + climbStairs(n-2);
    stairMap.set(n, newEntry);
    return newEntry; 
};

const stairMap = new Map();
stairMap.set(0, 0);
stairMap.set(1, 1);
stairMap.set(2, 2);