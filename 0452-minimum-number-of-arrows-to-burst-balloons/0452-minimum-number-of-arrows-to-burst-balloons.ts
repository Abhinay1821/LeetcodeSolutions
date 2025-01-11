function findMinArrowShots(points: number[][]): number {
    points.sort((a,b)=>{
        if(a[0]===b[0]){
            return a[1]-b[1]
        }
        else return a[0]-b[0]
    })
    let i=1;
    let lastVal = points[0][1]
    let ans = 1;
    while(i<points.length){
        if(lastVal>=points[i][0]){
            lastVal = Math.min(lastVal,points[i][1])
            i++
        }
        else{
            ans++;
            lastVal = points[i][1]
        }
    }
    return ans;
};