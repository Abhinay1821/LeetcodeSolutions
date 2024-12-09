function uniquePaths(m: number, n: number): number {
    let prev = Array(n).fill(1)
    let curr = Array(n).fill(1);
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            curr[j] = curr[j-1] + prev[j];
        }
        let temp = prev;
        prev = curr;
        curr = temp;
    }
    return prev[n-1];
};