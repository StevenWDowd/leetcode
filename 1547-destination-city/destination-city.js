/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const starts = new Set();
    const ends = new Set();
    for (let path of paths){
        starts.add(path[0]);
        ends.add(path[1]);
    }
    for (let end of ends){
        if (!starts.has(end)) return end;
    }

    return 'error';
};