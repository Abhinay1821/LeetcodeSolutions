/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sellingVal = -1;
    let profit = 0;
    for(let i=prices.length-1;i>=0;i--){
        profit = Math.max(profit,sellingVal-prices[i]);
        sellingVal = Math.max(prices[i],sellingVal);
    }
    return profit<=0 ? 0 : profit;
};