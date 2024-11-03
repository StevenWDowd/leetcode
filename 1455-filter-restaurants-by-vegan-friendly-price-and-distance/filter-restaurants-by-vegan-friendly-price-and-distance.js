/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    let acceptedRes = [];
    for (let res of restaurants){
        if (res[3] <= maxPrice && res[4] <= maxDistance){
            if (veganFriendly === 1){
                if (res[2] === 1) acceptedRes.push(res);
            } else {
                acceptedRes.push(res);
            }
        }
    }
    acceptedRes.sort((a,b) => b[1] - a[1] || b[0] - a[0]);
    return acceptedRes.map((a) => a[0]);
};