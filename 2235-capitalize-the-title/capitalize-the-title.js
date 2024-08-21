/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const split = title.split(' ');
    const final = [];
    for (let word of split){
        if (word.length <= 2){
            final.push(word.toLowerCase());
        } else {
            let first = word[0].toUpperCase();
            let rest = word.slice(1).toLowerCase();
            final.push(first + rest);
        }
    }
    return final.join(' ');
};