
function eraseOverlapIntervals(intervals: number[][]): number {
    intervals.sort((a:any,b:any)=>{
        if(a[0]===b[0]){
            return a[1]-b[1]
        }
        else return a[0]-b[0]
    })
    let ans = 0;
    let lastCheck = intervals[0][1]
    for(let i=1;i<intervals.length;i++){
        if(lastCheck > intervals[i][0]){
            ans++;
            if(lastCheck>intervals[i][1]){
                lastCheck = intervals[i][1]
            }
        }
        else{
            lastCheck = intervals[i][1]
        }
    }
    return ans;
};