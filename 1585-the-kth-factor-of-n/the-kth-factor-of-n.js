/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    const factors = [];
   let counter = 1;
   let ans = -1;
   while (counter < n + 1){
    if (n % counter === 0) factors.push(counter);
    counter++;
   }
   //console.log('factors is: ', factors);
   if (factors.length >= k) ans = factors[k-1];
   return ans;
    
};
