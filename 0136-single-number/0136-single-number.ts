function singleNumber(nums: number[]): number {
    let x = nums[0]
    for(let i=1;i<nums.length;i++){
        x = x^nums[i]
    }
    return x
};