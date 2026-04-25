/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let binary = n.toString(2);
    //two pointer
    //move first til we find a 1
    //move second from that idx til we hit another
    //repeat
    let best = 0;
    let ldx = 0;
    let rdx = 0;
    while (ldx < binary.length && rdx < binary.length){
        let left = binary[ldx];
        while (left !== '1'){
            ldx++;
            left = binary[ldx];
        }
        //left is now 1
        rdx = ldx + 1;
        let right = binary[rdx];
        while (right === '0'){
            rdx++;
            right = binary[rdx];
        }
        //reached a 1 on right or end of string
        if (right === '1'){
            let dist = rdx - ldx;
            if (dist > best) best = dist;
        }
        ldx = rdx;
    }
    return best;

};