function calc(prices:number[],fee:number,sell:number,index:number,dp:any){
    if(index===prices.length) return 0;
    if(sell===1){
        if(dp[index][1]!==-1) return dp[index][1]
        return dp[index][1] =Math.max(calc(prices,fee,0,index+1,dp)+prices[index]-fee,calc(prices,fee,1,index+1,dp))
    }
    else{
        if(dp[index][0]!==-1) return dp[index][0]
        return dp[index][0] = Math.max(calc(prices,fee,1,index+1,dp)-prices[index],calc(prices,fee,0,index+1,dp))
    }
}
function maxProfit(prices: number[], fee: number): number {
    const n = prices.length
    const dp = Array(n+1).fill(-1).map(()=>Array(2).fill(-1))
    const ans = calc(prices,fee,0,0,dp)
    return ans;
};