/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxval = Math.max(...candies);
    const ans = candies.map(val=>{
        return val+extraCandies >= maxval
    })
    return ans;
};