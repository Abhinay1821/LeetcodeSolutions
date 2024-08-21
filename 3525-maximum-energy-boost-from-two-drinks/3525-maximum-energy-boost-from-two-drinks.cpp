class Solution {
public:
    long long solve(vector<int>& energyDrinkA, vector<int>& energyDrinkB,int suit,int index,vector<vector<long long>>&dp){
        if(index>=energyDrinkA.size()) return 0;
        if(dp[index][suit]!=-1){
            return dp[index][suit];
        }
        if(suit==0){
            return dp[index][suit] = energyDrinkA[index] + max(solve(energyDrinkA,energyDrinkB,0,index+1,dp),solve(energyDrinkA,energyDrinkB,1,index+2,dp));
        }
        return dp[index][suit] = energyDrinkB[index] + max(solve(energyDrinkA,energyDrinkB,1,index+1,dp),solve(energyDrinkA,energyDrinkB,0,index+2,dp));
    }

    long long maxEnergyBoost(vector<int>& energyDrinkA, vector<int>& energyDrinkB) {
        int n = energyDrinkA.size();
        vector<vector<long long>>dp(n,vector<long long>(2,-1));
        long long ans1=solve(energyDrinkA,energyDrinkB,0,0,dp);
        long long ans2=solve(energyDrinkA,energyDrinkB,1,0,dp);
        return max(ans1,ans2);
    }
};