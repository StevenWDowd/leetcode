/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    //sort times? then check each pair, along with the first and last
    timePoints.sort(compTimes);
    //console.log('timepoints is now: ', timePoints);
    let minDiff = timeDiff(timePoints[0], timePoints[1]);
    for (let i = 1; i < timePoints.length - 1; i++){
        let candidate = timeDiff(timePoints[i], timePoints[i+1]);
        if (candidate < minDiff) minDiff = candidate;
    }
    //now comp first and last entry across days
    let earliest = timePoints[0];
    let latest = timePoints[timePoints.length - 1];
    //diff of latest from 24:00 + diff of earliest from 00:00
    let dayDiff = 0;
    dayDiff+= timeDiff(latest, '24:00');
    dayDiff+= timeDiff(earliest, '00:00');
    if (dayDiff < minDiff) minDiff = dayDiff;

    return minDiff;
};

function compTimes(time1, time2){
    let split1 = time1.split(':');
    let split2 = time2.split(':');
    if (split1[0] > split2[0]){
        return 1;
    } else if (split1[0] < split2[0]){
        return -1;
    } else {
        if (split1[1] > split2[1]){
            return 1;
        } else if (split1[1] < split2[1]){
            return -1;
        } else {
            return 0;
        }
    }
}

function timeDiff(time1, time2){
    let split1 = time1.split(':');
    let split2 = time2.split(':');
    // console.log('split1 is: ', split1);
    // console.log('split2 is: ', split2);
    // let hourDiff = Math.abs(Number(split1[0]) - Number(split2[0]));
    // //let minDiff = Math.abs(Number(split1[1]) - Number(split2[1]));
    // //console.log('hourDiff is: ', hourDiff);
    // //console.log('minuteDiff is: ', minDiff);
    // //return (hourDiff * 60) + minDiff;
    // console.log('initial hourDiff is: ', hourDiff);
    // hourDiff*=60;
    // console.log('hourDiff in minutes is: ', hourDiff);
    // hourDiff-=Number(split1[1]);
    // hourDiff+=Number(split2[1]);
    // console.log('final hourDiff is: ', hourDiff);
    // return hourDiff;
    let minutes1 = (Number(split1[0]) * 60 + Number(split1[1]));
    let minutes2 = (Number(split2[0]) * 60 + Number(split2[1]));
    return Math.abs(minutes1 - minutes2);
}