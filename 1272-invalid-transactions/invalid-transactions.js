/**
 * @param {string[]} transactions
 * @return {string[]}
 */
var invalidTransactions = function(transactions) {
    const invalids = [];
    //key is name, val is object of city:time pairs
    const nameTrans = {};
    //how to avoid duplicates?
    for (let transaction of transactions){
        let splitT = transaction.split(',');
        let name = splitT[0];
        let city = splitT[3];
        let time = splitT[1];
        if (!nameTrans[name]) nameTrans[name] = {};
        //need array to save multiple time values instead of overwriting
        if (!nameTrans[name][city]) nameTrans[name][city] = [];
        nameTrans[name][city].push(Number(time));
        //nameTrans[name][city] = Number(time);
    }
    console.log('nameTrans is: ', nameTrans);
    for (let transaction of transactions){
        if (isFishy(transaction, nameTrans)) invalids.push(transaction);
    }
    return invalids;
    
};

//const nameTrans = {};
//helper
function isFishy(transaction, dict){
    let nameTrans = dict;
    let splitT = transaction.split(',');
    let name = splitT[0];
    let time = Number(splitT[1]);
    let amount = Number(splitT[2]);
    let city = splitT[3];

    if (amount > 1000) return true;

    let matches = nameTrans[name];
    console.log('matches is: ', matches);
    for (let key in matches){
        //if (key !== city && Math.abs(matches[key] - time) <= 60 ) return true;
        if (key !== city){
            let oldTimes = matches[key];
            for (let oldTime of oldTimes){
                if (Math.abs(oldTime - time) <= 60) return true;
            }
        }
    }
    return false;
}