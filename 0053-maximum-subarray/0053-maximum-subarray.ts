function maxSubArray(nums: number[]): number {
    let ans = nums[0];
    let temp = nums[0];
    for(let i=1;i<nums.length;i++){
        if(temp>0){
            temp = temp+nums[i]
        }
        else{
            temp=nums[i];
        }
        ans = Math.max(temp,ans)
    }
    return Math.max(ans,temp);
};