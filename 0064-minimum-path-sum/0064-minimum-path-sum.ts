function minPathSum(grid: number[][]): number {
    const row = grid.length;
    const col = grid[0].length;
    
    let a1 = []
    let a2 = []
    let a3 = []
    a1[0] = grid[0][0]
    a3[0] = grid[0][0]
    for(let i=1;i<col;i++){
        a1[i] = a1[i-1] + grid[0][i]
    }
    for(let i=1;i<row;i++){
        a3[i] = a3[i-1] + grid[i][0]
    }
    for(let i=1;i<row;i++){
        a2[0] = a3[i]
        for(let j=1;j<col;j++){
            a2[j] = Math.min(a1[j],a2[j-1]) + grid[i][j];
        }
        const temp = a2;
        a2=a1;
        a1=temp;
    }
    return a1[col-1]

};