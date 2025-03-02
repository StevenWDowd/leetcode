/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let myProm = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done');
        }, millis);
    })
    return myProm;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */