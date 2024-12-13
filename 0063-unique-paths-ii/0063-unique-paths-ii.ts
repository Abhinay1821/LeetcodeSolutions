function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = Array(m).fill(0).map(()=>Array(n).fill(0));

    // if(obstacleGrid[0][0]===1) return 0;
    for(let i=0;i<m;i++){
        if(obstacleGrid[i][0]!==1)dp[i][0]=1;
        else break;
    }
    for(let j=0;j<n;j++){
        if(obstacleGrid[0][j]!==1)dp[0][j]=1;
        else break;
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(obstacleGrid[i][j]!==1){
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    return dp[m-1][n-1]
};