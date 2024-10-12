/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    //Days: 4chars -> double digit
    //      3chars -> single digit
    const splitDate = date.split(' ');
    let day = splitDate[0];
    if (day.length === 4){
        day = day.slice(0,2);
    } else {
        day = "0" + day.slice(0,1);
    }

    const dateDict = {
        "Jan":"01",
        "Feb":"02",
        "Mar":"03",
        'Apr':'04',
        'May':'05',
        'Jun':'06',
        'Jul':'07',
        'Aug':'08',
        'Sep':'09',
        'Oct':'10',
        'Nov':'11',
        'Dec':'12'
    }

    let month = dateDict[splitDate[1]];
    let year = splitDate[2];
    return `${year}-${month}-${day}`;
};