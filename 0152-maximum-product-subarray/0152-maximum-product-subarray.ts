function maxProduct(nums: number[]): number {
    const n = nums.length
    let prod = 1
    let ans = -1000000;
    for(let i=0;i<n;i++){
        prod*=nums[i]
        ans = Math.max(prod,ans);
        if(prod===0){
            prod=1;
        }
    }
    prod=1;
    for(let i=n-1;i>=0;i--){
        prod*=nums[i]
        ans = Math.max(prod,ans);
        if(prod===0){
            prod=1;
        }
    }
    return ans
};