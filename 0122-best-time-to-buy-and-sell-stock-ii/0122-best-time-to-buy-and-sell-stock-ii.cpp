class Solution {
public:
    int cal(vector<int>&prices,int buyOrSell,int index,vector<vector<int>>&dp){
        if(index>=prices.size()) return 0;
        if(buyOrSell==1){
            if(dp[index][1]!=-1) return dp[index][1];
            return dp[index][1] =max(cal(prices,-1,index+1,dp)-prices[index],cal(prices,1,index+1,dp));
        }
        else{
            if(dp[index][0]!=-1) return dp[index][0];
            return dp[index][0] = max(cal(prices,1,index+1,dp)+prices[index],cal(prices,-1,index+1,dp));
        }
        // return 0;
    }
    int maxProfit(vector<int>& prices) {
        int n=prices.size();
        vector<vector<int>>dp(n+1,vector<int>(2,-1));
        int profit = cal(prices,1,0,dp);
        return profit;
    }
};