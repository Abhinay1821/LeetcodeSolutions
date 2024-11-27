function maxSubArray(nums: number[]): number {
    let ans = nums[0];
    let temp = nums[0];
    for(let i=1;i<nums.length;i++){
        temp = Math.max(nums[i],temp+nums[i]);
        ans = Math.max(ans,temp)
    }
    return ans;
};