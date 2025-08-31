/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans = [];
    let aDex = a.length - 1;
    let bDex = b.length - 1;
    let rem = false;
    while (aDex > -1 && bDex > -1){
        let sum = Number(a[aDex]) + Number(b[bDex]);
        if (rem){
            sum++;
            rem = false;
        }
        if (sum === 0){
            ans.push('0')
        } else if (sum === 1){
            ans.push('1');
        } else if (sum === 2){
            ans.push('0');
            rem = true;
        } else if (sum === 3){
            ans.push('1');
            rem = true;
        }
        aDex--;
        bDex--;
    }

    while (aDex > -1){
        let sum = Number(a[aDex]);
        if (rem){
            sum++;
            rem = false;
        }
        if (sum === 0){
            ans.push('0');
        } else if (sum === 1){
            ans.push('1');
        } else if (sum === 2){
            ans.push('0');
            rem = true;
        } else if (sum === 3){
            ans.push('1');
            rem = true;
        }
        aDex--;
    }

    while (bDex > -1){
        let sum = Number(b[bDex]);
        if (rem){
            sum++;
            rem = false;
        }
        if (sum === 0){
            ans.push('0');
        } else if (sum === 1){
            ans.push('1');
        } else if (sum === 2){
            ans.push('0');
            rem = true;
        } else if (sum === 3){
            ans.push('1');
            rem = true;
        }
        bDex--;
    }
    if (rem) ans.push('1');
    ans.reverse();
    console.log(' ans is now: ', ans);
    while (ans[0] === '0' && ans.length > 1){
        ans.shift();
        // if (ans[1] === '0'){
        //     ans.pop();
        //     console.log('')
        //     } else {
        //         break;
        //     }
    }
    // while (ans[0] === '0' && ans.length > 1){
    //     ans.shift();
    // }
    return ans.join('');
};