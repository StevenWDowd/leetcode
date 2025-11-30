/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const ans = [];
    const curr = [];

    function stringBuild(leftnum, rightnum){
        //base
        if (leftnum === 0 && rightnum === 0){
            ans.push(curr.join(''));
        }

        if (leftnum > 0){
            curr.push('(');
            stringBuild(leftnum - 1, rightnum);
        }

        if (rightnum > 0 && leftnum < rightnum){
            curr.push(')');
            stringBuild(leftnum, rightnum - 1);
        }

        if (curr.length > 0) {
            curr.pop();
        }
    }
    stringBuild(n, n);
    return ans;
};