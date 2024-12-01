/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    //this solution won't work. wrong track?
    // const splitS = s.split[i];
    // //length n means n-1 i reverses
    // let forward = false;
    // const finalArr = [];
    // for (let section of splitS){
    //     if (forward){
    //         for (let i = section.)
    //     }
    // }

    //intuitive, but expensive
    const final = [];
    for (let i = 0; i < s.length; i++){
        let curr = s[i];
        if (curr === 'i'){
            final.reverse();
        } else {
            final.push(curr);
        }
    }
    return final.join('');
};