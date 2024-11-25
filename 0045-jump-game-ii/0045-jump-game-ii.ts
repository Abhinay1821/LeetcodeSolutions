function jump(nums: number[]): number {
    const dp = Array(nums.length).fill(10001)
    dp[0] = 0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<=i+nums[i];j++){
            dp[j] = Math.min(dp[i]+1,dp[j])
        }
    }
    return dp[nums.length-1];
};