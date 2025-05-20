/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let words = s.split(' ');
    //console.log('words is: ', words);
    let chopped = words.filter((word) => word !== '');
    return chopped.length;
};