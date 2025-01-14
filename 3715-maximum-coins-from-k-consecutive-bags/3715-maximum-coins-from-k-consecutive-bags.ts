function maximumCoins(coins: number[][], k: number): number {
    coins.sort((a,b)=>a[0]-b[0])
    const n = coins.length
    let ans = 0;
    let tempAns = 0;
    for(let i=0,j=0;i<coins.length;i++){
        while(j<n && coins[j][1]-coins[i][0]<k){
            tempAns += (coins[j][1] - coins[j][0]+1) * coins[j][2]
            j++;
        }
        if(j<n){
            const partial = Math.max(0,(coins[i][0]+k-1-coins[j][0]+1)*coins[j][2])
            console.log(j,i,tempAns,partial)
            ans = Math.max(tempAns+partial,ans)
        }
        tempAns -= (coins[i][1]-coins[i][0]+1)*coins[i][2]
    }

    tempAns = 0;
    for(let i=0,j=0;i<coins.length;i++){
        tempAns += (coins[i][1] - coins[i][0]+1) * coins[i][2]

        while(coins[j][1]<coins[i][1]-k+1){
            tempAns -= (coins[j][1]-coins[j][0]+1) * coins[j][2]
            j++
        }
        
        const partial = Math.max(0,(coins[i][1]-k+1 - coins[j][0])*coins[j][2])
        ans = Math.max(tempAns-partial,ans)
    }
    return ans;
};