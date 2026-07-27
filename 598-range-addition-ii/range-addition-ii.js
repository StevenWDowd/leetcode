/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (!ops.length) return m * n;
    //each op pair shrinks possible area of greatest ints
    //a [2,2] pair is included in [3,3] but not vice-versa
    //sort ops?
    //ops.sort((a,b) =>a[0] - b[0] || a[1] - b[1]);
    //ops.sort((a,b) => a[0] * a[1] - b[0] * b[1]);
    ops.sort((a,b) => a[0] - b[0]);
    let minOne = ops[0][0];
    ops.sort((a,b) => a[1] - b[1]);
    let minTwo = ops[0][1];
    //console.log(ops);
    //return ops[0][0] * ops[0][1];
    return minOne * minTwo;


    // const grid = [];
    // for (let i = m; i > 0; i--){
    //     let row = new Array(n);
    //     row.fill(0);
    //     grid.push(row);
    // }
    // console.log(grid);
    // return
};