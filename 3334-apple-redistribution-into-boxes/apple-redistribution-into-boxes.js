/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let appleNo = apple.reduce((acc, curr) => acc + curr, 0);
    let capSort = [...capacity].sort((a,b) => a-b);
    let boxes = 0;
    while (appleNo > 0){
        let curr = capSort.pop();
        appleNo-= curr;
        boxes++;
    }
    return boxes;  
};