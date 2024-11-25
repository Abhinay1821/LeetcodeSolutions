function canJump(nums: number[]): boolean {
    let remain = nums[0];
    for(let i=1;i<nums.length;i++){
        if(remain===0) return false;
        remain = Math.max(remain-1,nums[i]);
    }
    return true;
};