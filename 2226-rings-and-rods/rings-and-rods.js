/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    const rSet = new Set();
    const gSet = new Set();
    const bSet = new Set();
    let idx = 0;
    while (idx < rings.length){
        let color = rings[idx];
        let rod = rings[idx+1];
        if (color === 'R'){
            rSet.add(Number(rod));
        }
        if (color === 'G'){
            gSet.add(Number(rod));
        }
        if (color === 'B'){
            bSet.add(Number(rod));
        }
        idx+= 2;
    }
    let count = 0;
    for (let i = 0; i < 10; i++){
        if (rSet.has(i) && gSet.has(i) && bSet.has(i)) count++;
    }
    return count;


    
};