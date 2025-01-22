function pivotIndex(nums: number[]): number {
    const prefixSum = []
    let totalSum = 0;
    for(let i=0;i<nums.length;i++){
        totalSum+=nums[i]
        prefixSum[i] = totalSum;
    }
    for(let i=0;i<nums.length;i++){
        if(totalSum-prefixSum[i] === prefixSum[i]-nums[i]) return i
    }
    return -1;
};