function minSubArrayLen(target: number, nums: number[]): number {
    const arr = []
    let sum = 0
    let ans = nums.length;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i];
        arr.push(nums[i]);
        while(sum-arr[0]>=target){
            sum-=arr[0];
            arr.shift();
        }
        if(sum>=target) ans = Math.min(ans,arr.length);
    }
    return sum>=target ? ans : 0;
};