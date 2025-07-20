/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    //m-1 down, n-1 to the right => (m-1) + (n-1) total moves to dest => m+n-2
    let totalOps = (m + n - 2);
    return Math.round(facto(totalOps) / (facto(n-1) * facto(m-1)));
};

function facto(n){
    if (n === 0) return 1;
    return n * facto(n-1);
}