function longestSubarray(nums: number[]): number {
    let left=0,ans=0,count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            count++;
        }
        while(count>1){
            if(nums[left]===0) count--;
            left++;
        }
        ans = Math.max(ans,i-left);
    }
    return ans;
};