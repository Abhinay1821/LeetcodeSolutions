function minDistance(word1: string, word2: string): number {
    const m = word1.length;
    const n = word2.length
    const dp = Array(m+1).fill(0).map(()=>Array(n+1).fill(0))
    for(let i=0;i<=m;i++){
        dp[i][0] = i
    }
    for(let j=0;j<=n;j++){
        dp[0][j] = j
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(word1[i]===word2[j]){
                dp[i+1][j+1] = dp[i][j];
            }
            else{
                dp[i+1][j+1] = Math.min(dp[i+1][j],Math.min(dp[i][j+1],dp[i][j]))+1
            }
        }
    }
    return dp[m][n]
};