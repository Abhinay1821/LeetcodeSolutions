function maxArea(height: number[]): number {
    let ans = 0;
    let s=0,e=height.length-1;
    while(s<e){
        const water = Math.min(height[s], height[e]) * (e-s)
        ans = Math.max(ans,water)
        if(height[s]>height[e]){
            e--;
        }
        else s++;
    }
    return ans;

};