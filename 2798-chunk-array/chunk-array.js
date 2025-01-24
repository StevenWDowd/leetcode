/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunks = [];
    let idx = 0;
    //let chunkCt = Math.floor(arr.length / size);
    while (idx < arr.length){
        const chunk = [];
        let count = 0;
        while (count < size && idx < arr.length){
            chunk.push(arr[idx]);
            idx++;
            count++;
        }
        chunks.push(chunk);

    }
    return chunks;
};
