/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xStr = (x >>> 0).toString(2);
    let yStr = (y >>> 0).toString(2);
    console.log('xStr is: ', xStr);
    console.log('yStr is: ', yStr);
    console.log(x.toString(2));
    let diffs = 0;
    let dex1 = xStr.length - 1;
    let dex2 = yStr.length - 1;
    while (dex1 > -1 && dex2 > -1){
        if (xStr[dex1] !== yStr[dex2]) diffs++;
        dex1--;
        dex2--;
    }
    //didn't reach end of one string
    while (dex1 > -1){
        if (xStr[dex1] === '1') diffs++;
        dex1--;
    }
    while (dex2 > -1){
        if (yStr[dex2] === '1') diffs++;
        dex2--;
    }
    return diffs;
};