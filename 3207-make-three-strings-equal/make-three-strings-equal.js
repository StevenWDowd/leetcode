/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
    if (s1[0] !== s2[0] || s2[0] !== s3[0] || s1[0] !== s3[0]) return -1;
    // let idx1 = s1.length - 1;
    // let idx2 = s2.length - 1;
    // let idx3 = s3.length - 3;
    let opCount = 0;
    let split1 = s1.split('');
    let split2 = s2.split('');
    let split3 = s3.split('');
    let smallest = Math.min(split1.length, split2.length, split3.length);
    while (split1.length > smallest){
        split1.pop();
        opCount++;
    }
    while (split2.length > smallest){
        split2.pop();
        opCount++;
    }

    while (split3.length > smallest){
        split3.pop();
        opCount++;
    }

    while (split1.length && split2.length && split3.length){
        if (!compArrs(split1, split2, split3)){
            split1.pop();
            split2.pop();
            split3.pop();
            opCount+= 3;
        } else {
            return opCount;
        }
    }
    if (split1.length && split2.length && split3.length) return opCount;
    return -1;

};

function compArrs(a1, a2, a3){
    for (let i = 0; i < a1.length; i++){
        if (a1[i] !== a2[i] || a1[i] !== a3[i] || a2[i] !== a3[i]) return false;
    }
    return true;
}