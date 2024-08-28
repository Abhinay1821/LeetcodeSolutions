/**
 * @param {number[]} prices
 * @return {number}
 */

 function createArray(n){
    return Array.from({length : n},()=>[-1,-1]);
 }
 function cal(prices,buyOrSell,index,dp){
    if(index>=prices.length) return 0;
    if(buyOrSell==1){
        if(dp[index][0]!==-1) return dp[index][0];
        return dp[index][0]=Math.max(cal(prices,-1,index+1,dp)-prices[index],cal(prices,1,index+1,dp));
    }
    else{
        if(dp[index][1]!==-1) return dp[index][1];
        return dp[index][1] = Math.max(cal(prices,1,index+1,dp)+prices[index],cal(prices,-1,index+1,dp));
    }
 }
var maxProfit = function(prices) {
    const dp = createArray(prices.length);
    const profit = cal(prices,1,0,dp);
    return profit;
};