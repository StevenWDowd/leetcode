/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    //sort list, take yours and alice from top end, bob from bottom?
    const sortedPiles = piles.sort((a,b) => a - b);
    //console.log(sortedPiles);
    let ldx = 0;
    let rdx = sortedPiles.length - 1;
    let score = 0;
    while (ldx < rdx){
        let mine = sortedPiles[rdx - 1];
        console.log('mine is: ', mine);
        ldx++;
        rdx--;
        rdx--;
        score+= mine;
    }
    return score;
};