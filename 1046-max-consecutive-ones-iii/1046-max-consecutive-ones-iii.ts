function longestOnes(nums: number[], k: number): number {
    let left = 0;
    let count = 0;
    let ans = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            count++;
        }
        while(count > k){
            if(nums[left]===0) count--;
            left++;
        }
        ans = Math.max(ans,i-left+1);
    }
    return ans;
};