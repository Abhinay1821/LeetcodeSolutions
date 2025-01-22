function largestAltitude(gain: number[]): number {
    let ans = 0;
    let sum = 0;
    for(let i=0;i<gain.length;i++){
        sum+=gain[i]
        ans=Math.max(ans,sum)
    }
    return ans
};