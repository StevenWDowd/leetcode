/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
    //always drink the ones we have to start with
    let drunk = numBottles;
    let empties = numBottles;
    while (empties >= numExchange){
        empties-= numExchange;
        drunk++;
        //drink one more, giving us one more empty
        empties++;
        numExchange++;
    }
    return drunk;
};