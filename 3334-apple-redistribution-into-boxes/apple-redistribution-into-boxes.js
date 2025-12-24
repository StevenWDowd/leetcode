/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let appleNo = apple.reduce((acc, curr) => acc + curr, 0);
    let capSort = [...capacity].sort((a,b) => a-b);
    console.log('capsort is: ', capSort);
    console.log('appleno is: ', appleNo);
    let boxes = 0;
    while (appleNo > 0){
        let curr = capSort.pop();
        appleNo-= curr;
        boxes++;
    }
    return boxes;
    //let idx = 0;
    // let currCap = capSort[idx];
    // while (appleNo > 0){
    //     appleNo--;
    //     currCap--;
    //     if (currCap === 0){
    //         //need a new box
    //         boxes++;
    //         idx++;
    //         currCap = capSort[idx];
    //     }
    // }
    // return boxes;
    
};