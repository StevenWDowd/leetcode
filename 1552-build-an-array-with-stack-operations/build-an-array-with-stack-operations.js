/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let stream = 1;
    let comms = [];
    //only need pop to skip over unneeded ints
    let idx = 0;
    let toPop = 0;
    while (idx < target.length){
        let curr = target[idx];
        if (curr === stream){
            comms.push('Push');
            stream++;
        } else {
            //need to clear some ints first
            while (stream < curr){
                comms.push('Push');
                toPop++;
                stream++;
            }
            //now clear wrong pushes
            while (toPop > 0){
                comms.push('Pop');
                toPop--;
            }
            //now add correct int and increment stream
            comms.push('Push');
            stream++;
        }
        idx++;
    }
    return comms;
};